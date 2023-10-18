import { HttpException, HttpStatus } from '@nestjs/common';
import { CommandBus, CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { IIntegrationSetting, IIntegrationTenant, IIntegrationTenantUpdateInput } from '@gauzy/contracts';
import { RequestContext } from 'core/context';
import { IntegrationTenantUpdateCommand } from '../../commands';
import { IntegrationTenantService } from '../../integration-tenant.service';
import { IntegrationTenant } from '../../integration-tenant.entity';
import { IntegrationSettingUpdateCommand } from 'integration-setting/commands';

@CommandHandler(IntegrationTenantUpdateCommand)
export class IntegrationTenantUpdateHandler implements ICommandHandler<IntegrationTenantUpdateCommand> {

    constructor(
        private readonly _commandBus: CommandBus,
        private readonly _integrationTenantService: IntegrationTenantService
    ) { }

    public async execute(
        command: IntegrationTenantUpdateCommand
    ): Promise<IntegrationTenant> {
        try {
            const { id, input } = command;
            return await this.update(id, input);
        } catch (error) {
            // Handle errors and return an appropriate error response
            console.log(`Failed to update integration tenant: %s`, error.message);
            throw new HttpException(`Failed to update integration tenant: ${error.message}`, HttpStatus.BAD_REQUEST);
        }
    }

    /**
     * Update an integration tenant with the provided data.
     * @param id The ID of the integration tenant to update.
     * @param request The data to update the integration tenant.
     * @returns A promise that resolves to the updated integration tenant.
     */
    public async update(
        integrationId: IIntegrationTenant['id'],
        request: IIntegrationTenantUpdateInput
    ): Promise<IIntegrationTenant> {
        try {
            const tenantId = RequestContext.currentTenantId() || request.tenantId;
            let { organizationId, settings = [] } = request;

            // Map and assign 'settings' and 'entitySettings' with tenant and organization IDs
            settings = settings.map((item: IIntegrationSetting) => ({
                ...item,
                integrationId,
                tenantId,
                organizationId
            }));

            /**
             * Executes an update command for integration settings.
             *
             * @param integrationId - The identifier of the integration to update settings for.
             * @param settings - The new settings data to be applied to the integration.
             * @returns {Promise<any>} - A promise that resolves when the update command is executed.
             */
            await this._commandBus.execute(
                new IntegrationSettingUpdateCommand(
                    integrationId,
                    settings
                )
            );
            return await this._integrationTenantService.findOneByIdString(integrationId);
        } catch (error) {
            // Handle errors and return an appropriate error response
            console.log(`Failed to update integration tenant: %s`, error.message);
            throw new HttpException(`Failed to update integration tenant: ${error.message}`, HttpStatus.BAD_REQUEST);
        }
    }
}
