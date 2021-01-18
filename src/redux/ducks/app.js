import { call, all, takeLatest, put } from 'redux-saga/effects'
import { submitForm } from '../../services/api'

export const types = {
    LOAD_LOPD_REQUEST: 'LOAD_LOPD_REQUEST',
    LOAD_LOPD_FAILURE: 'LOAD_LOPD_FAILURE',
    LOAD_LOPD_SUCCESS: 'LOAD_LOPD_SUCESSS',
    CHANGE_STEP_REQUEST: 'CHANGE_STEP_REQUEST',
    CHANGE_STEP_FAILURE: 'CHANGE_STEP_FAILURE',
    CHANGE_STEP_SUCCESS: 'CHANGE_STEP_SUCCESS',
    VALIDATION_FORM_REQUEST: 'VALIDATION_FORM_REQUEST',
    VALIDATION_FORM_FAILURE: 'VALIDATION_FORM_FAILURE',
    VALIDATION_FORM_SUCCESS: 'VALIDATION_FORM_SUCCESS',
    LOADING_REQUEST: 'LOADING_REQUEST',
    SET_STATUS_REQUEST: 'SET_STATUS_REQUEST',
}

export const initialAppState = {
    totalSteps: 3,
    currentStep: 1,
    lopd: false,
    isLoading: false,
    requestStatus: 0,
}

export const changeLopdValue = (payload) => ({
    type: types.LOAD_LOPD_REQUEST,
    payload,
})

export const changeWizardStepTo = (payload) => ({
    type: types.CHANGE_STEP_REQUEST,
    payload,
})

export const validationForm = (payload) => ({
    type: types.VALIDATION_FORM_REQUEST,
    payload,
})

function* lodpSaga({ payload }) {
    try {
        yield put({ type: types.LOAD_LOPD_SUCCESS, payload })
    } catch ({ message }) {
        yield put({ type: types.LOAD_LOPD_FAILURE, message })
    }
}

function* changeWizardStepToSaga({ payload }) {
    try {
        yield put({ type: types.CHANGE_STEP_SUCCESS, payload })
    } catch (err) {
        yield put({ type: types.CHANGE_STEP_FAILURE, err })
    }
}

function* validateFormSaga({ payload }) {
    try {
        yield put({ type: types.LOADING_REQUEST })
        const { status } = yield call(submitForm, payload)
        yield put({ type: types.SET_STATUS_REQUEST, payload: status })
    } catch ({ status }) {
        yield put({ type: types.VALIDATION_FORM_FAILURE, status })
        yield put({ type: types.SET_STATUS_REQUEST, payload: status })
    } finally {
        yield put({ type: types.LOADING_REQUEST })
        yield put({ type: types.CHANGE_STEP_SUCCESS, payload: 3 })
    }
}

export function* appSagas() {
    yield all([
        takeLatest(types.LOAD_LOPD_REQUEST, lodpSaga),
        takeLatest(types.CHANGE_STEP_REQUEST, changeWizardStepToSaga),
        takeLatest(types.VALIDATION_FORM_REQUEST, validateFormSaga),
    ])
}

export const appReducer = (state = initialAppState, { type, payload }) => {
    switch (type) {
        case types.LOAD_LOPD_SUCCESS:
            return {
                ...state,
                lopd: payload,
            }
        case types.CHANGE_STEP_SUCCESS:
            return {
                ...state,
                currentStep: payload,
            }
        case types.LOADING_REQUEST:
            return {
                ...state,
                isLoading: !state.isLoading,
            }
        case types.SET_STATUS_REQUEST:
            return {
                ...state,
                requestStatus: payload,
            }

        default:
            return state
    }
}
