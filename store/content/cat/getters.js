

export default {
    getError({error}){
        return error || '测试返回错误信息';
    },
    getList(state){
        return state.data.list

    }
}
