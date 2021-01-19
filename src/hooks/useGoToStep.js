import { useDispatch, useSelector } from 'react-redux'
import { changeWizardStepTo } from '../redux/ducks/app'

const useGotoStep = () => {
    const dispatch = useDispatch()
    const { currentStep, totalSteps } = useSelector((state) => state.app)

    const prevStep = () => {
        if (currentStep > 1) dispatch(changeWizardStepTo(currentStep - 1))
    }

    const nextStep = () => {
        if (currentStep < totalSteps) {
            dispatch(changeWizardStepTo(currentStep + 1))
        }
        if (currentStep === totalSteps) {
            dispatch(changeWizardStepTo(1))
        }
    }

    return { prevStep, nextStep }
}

export default useGotoStep
