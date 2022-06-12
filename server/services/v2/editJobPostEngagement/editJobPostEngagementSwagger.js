const message = require('../../../locales/en');

module.exports = swaggerJson => {
    swaggerJson.paths['/v2/job-post/engagement'].put = {
        security: [{
            bearerAuth: []
        }],
        tags: [
            'Job Post(v2)'
        ],
        description: 'Edit job-post by client',
        summary: 'Edit job-post by client user (Step 3 - Final)',
        parameters: [
            {
                in: 'body',
                name: 'body',
                description: 'Body parameter',
                required: true,
                schema: {
                    $ref: '#/definitions/editJobPostEngagement'
                }
            }
        ],
        responses: {
            200: {
                description: 'Job brief is published by Admin/Client',
                schema: {
                    $ref: '#/definitions/successEditJobPostEngagement'
                }
            },
            400: {
                description: 'Invalid request',
                schema: {
                    $ref: '#/definitions/validationError'
                }
            },
            401: {
                description: 'Unauthorized Access',
                schema: {
                    $ref: '#/definitions/unauthorisedAccess'
                }
            },
            500: {
                description: 'Something went wrong. Try again.',
                schema: {
                    $ref: '#/definitions/unexpextedError'
                }
            }
        }
    };


    swaggerJson.definitions.unexpextedError = {
        properties: {
            status: {
                type: 'number',
                example: 0
            },
            message: {
                example: message.ERROR_MSG
            }
        }
    };

    swaggerJson.definitions.validationError = {
        properties: {
            status: {
                type: 'number',
                example: 0
            },
            message: {
                example: message.INVALID_REQUEST
            }
        }
    };

    swaggerJson.definitions.unauthorisedAccess = {
        properties: {
            status: {
                type: 'number',
                example: 0
            },
            message: {
                example: message.ACCESS_DENIED
            }
        }
    };

    swaggerJson.definitions.editJobPostEngagement = {
        type: 'object',
        properties: {
            id: {
                type: 'string',
                example: '60d1e5a0f97dc062965b807f'
            },
            timeZone: {
                type: 'string',
                example: 'Asia/Kolkata'
            },
            annualRate: {
                type: 'number',
                example: 40
            },
            currencyAnnualRate: {
                type: 'string',
                example: 'GBP'
            },
            employmentType: {
                type: 'array',
                example: [CONSTANTS.TALENT.EMPLOYMENT_TYPE_LABEL_PE, CONSTANTS.TALENT.EMPLOYMENT_TYPE_LABEL_FR]
            },
            ratePerHour: {
                type: 'number',
                example: 40
            },
            currency: {
                type: 'string',
                example: 'GBP'
            },
            teamPreference: {
                type: 'array',
                example: ['individuals']
            },
            assignments: {
                type: 'array',
                example: ['remote-only', 'occational-site-visit']
            },
            duration: {
                type: 'number',
                example: 3
            }
        }
    };

    swaggerJson.definitions.successEditJobPostEngagement = {
        properties: {
            status: {
                type: 'number',
                example: 1
            },
            message: {
                example: message.SUCCESS
            }
        }
    };

    return swaggerJson;
};
