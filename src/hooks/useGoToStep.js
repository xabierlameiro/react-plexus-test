import { useDispatch } from 'react-redux'
import { changeWizardStepTo } from '../redux/ducks/app'

const useGotoStep = () => {
    const dispatch = useDispatch()

    const changeStep = (value) => {
        dispatch(changeWizardStepTo(value))
    }
    return changeStep
}

export default useGotoStep
