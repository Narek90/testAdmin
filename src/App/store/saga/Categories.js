import { call, put, takeLatest } from "@redux-saga/core/effects";

import { deleteCategoryRequest, getCategoriesRequest } from "../../services/routes/categories";
import { getCategoriesAction, setCategoriesAction } from "../Actions/categoriesActions";
import { DELETE_CATEGORI, GET_CATEGORIES } from "../Types/categoriesTypes";
function* getCategories() {
    try {
        let data = yield call(getCategoriesRequest)
        yield put(setCategoriesAction(data.results))
    } catch (error) {
        console.log(error);
    }
}
function* deleteCategory({payload}) {
    console.log(payload);
    try {
       yield call(deleteCategoryRequest,payload)
       yield put(getCategoriesAction())
    } catch (error) {
        console.log(error);
    }
}

export default function* categoriesWatch() {
    yield takeLatest(GET_CATEGORIES, getCategories)
    yield takeLatest(DELETE_CATEGORI, deleteCategory)


}