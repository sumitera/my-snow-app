import '@servicenow/sdk/global'
import { Record } from '@servicenow/sdk/core'

Record({
    $id: Now.ID['short_description_dict_override'],
    table: 'sys_dictionary_override',
    data: {
        name: 'incident',
        element: 'short_description',
        base_table: 'task',
        mandatory: false,
    },
})
