import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class ApisetuGovGujaratvidyapithApi implements ICredentialType {
        name = 'N8nDevApisetuGovGujaratvidyapithApi';

        displayName = 'Apisetu Gov Gujaratvidyapith API';

        icon: Icon = { light: 'file:../nodes/ApisetuGovGujaratvidyapith/apisetu-gov-gujaratvidyapith.svg', dark: 'file:../nodes/ApisetuGovGujaratvidyapith/apisetu-gov-gujaratvidyapith.dark.svg' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: 'https://apisetu.gov.in/gujaratvidyapith/v3',
                        required: true,
                        placeholder: 'https://apisetu.gov.in/gujaratvidyapith/v3',
                        description: 'The base URL of your Apisetu Gov Gujaratvidyapith API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                'X-APISETU-APIKEY': '={{$credentials.apiKey}}',
                        },
                },
        };


}
