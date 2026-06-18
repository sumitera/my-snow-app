import '@servicenow/sdk/global'
import { ClientScript } from '@servicenow/sdk/core'

ClientScript({
    $id: Now.ID['short_description_not_mandatory'],
    name: 'Short Description Not Mandatory',
    table: 'incident',
    type: 'onLoad',
    uiType: 'all',
    global: true,
    appliesExtended: false,
    isolateScript: false,
    script: `function onLoad() {
    setTimeout(function() {
        g_form.setMandatory('short_description', false);
    }, 0);
}`,
})
