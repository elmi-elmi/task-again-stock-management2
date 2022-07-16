import mutations from "@/store/modules/report/mutations";
import actions from "@/store/modules/report/actions";
import getters from "@/store/modules/report/getters";
import saveStatePlugin from "@/utils/saveStatePlugin";

const reports = []

export default {
    plugins:[saveStatePlugin],
    namespaced: true,
    state: {
        reports
    },
    mutations,
    actions,
    getters
}
