module.exports = (swaggerJson) => {

    swaggerJson.paths['/talent/industries'] = {
        'get': {
            'tags': [
                'Talent'
            ],
            'description': 'Talent industries',
            'summary': 'Talent industries',
            'parameters': [
                {
                    'in': 'query',
                    'name': 'q',
                    'description': 'search'
                }
            ],
            'responses': {
                200: {
                    'description': 'Success',
                    'schema': {
                        $ref: '#/definitions/success'
                    }
                },
                400: {
                    'description': 'Validation failed.',
                    'schema': {
                        '$ref': '#/definitions/errorBadRequest'
                    }
                },
                422: {
                    'description': 'User duplicate',
                    'schema': {
                        '$ref': '#/definitions/errorUserRegister'
                    }
                },
                500: {
                    'description': 'Internal Server Error',
                    'schema': {
                        '$ref': '#/definitions/unexpextedError'
                    }
                }
            }
        }
    };

    return swaggerJson;
};
