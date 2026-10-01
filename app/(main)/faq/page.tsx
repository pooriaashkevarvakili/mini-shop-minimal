import WelcomeToast from '@/app/components/Home/WelcomeToast'
import SupportCard from '../../components/faq/SupportCard'
import Home from '../../components/faq/home'
import QuestionAnswer from './faqQuestion'
export default function page() {
    return (
        <div>
            <WelcomeToast/>
            <Home />
            <QuestionAnswer/>
            <SupportCard />
        </div>
    )
}