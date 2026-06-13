import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';
import { apIsDescription } from './resources/ap-is';

export class ApisetuGovGujaratvidyapith implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Apisetu Gov Gujaratvidyapith',
                name: 'N8nDevApisetuGovGujaratvidyapith',
                icon: { light: 'file:./apisetu-gov-gujaratvidyapith.svg', dark: 'file:./apisetu-gov-gujaratvidyapith.dark.svg' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Gujarat Vidyapith issues DigiLocker Degree certificates for student accounts.',
                defaults: { name: 'Apisetu Gov Gujaratvidyapith' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevApisetuGovGujaratvidyapithApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [
				{
					"name": "AP Is",
					"value": "AP Is",
					"description": ""
				}
			],
			"default": ""
		},
		...apIsDescription
                ],
        };
}
