import instance from "../components/api"

export const categoryAction = () => async (dispatch) => {
    try {

        dispatch({ type: 'CATEGORY_LIST_REQUEST' })
        const { data } = await instance.post("admin/getAdminCategories")
        dispatch({
            type: 'CATEGORY_LIST_SUCCESS',
            payload: data
        })
    } catch (error) {
        dispatch({
            type: 'CATEGORY_LIST_FAIL',
            payload: error
        })
    }
}