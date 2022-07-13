import mutations from "@/store/modules/report/mutations";
import actions from "@/store/modules/report/actions";
import getters from "@/store/modules/report/getters";

export default {
    namespaced: true,
    state: {
        reports:[]
    },
    mutations,
    actions,
    getters
}
