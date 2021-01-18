import StepOne from '../components/StepOne'
import StepTwo from '../components/StepTwo'
import StepThree from '../components/StepThree'
import { useSelector } from 'react-redux'

const Wizard = () => {
    const { currentStep } = useSelector((state) => state.app)
    return (
        <section className="page">
            <div className="container">
                {currentStep === 1 && <StepOne />}
                {currentStep === 2 && <StepTwo />}
                {currentStep === 3 && <StepThree />}
            </div>
        </section>
    )
}

export default Wizard
