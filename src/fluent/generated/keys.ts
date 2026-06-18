import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '80d8d48be4a74c26967f933db52f40a5'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: 'f074c2425d204d4f988ce24e4e00fa6c'
                    }
                    short_description_not_mandatory: {
                        table: 'sys_script_client'
                        id: 'short_description_not_mandatory'
                    }
                }
                composite: [
                    {
                        table: 'sys_dictionary_override'
                        id: 'short_description_dict_override'
                        key: {
                            name: 'incident'
                            element: 'short_description'
                        }
                    },
                ]
            }
        }
    }
}
