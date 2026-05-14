import '../styles/whycodehatch.css'
import {
  HiOutlineVideoCamera,
  HiOutlineUsers,
  HiOutlineClipboardDocumentList,
  HiOutlineAcademicCap,
  HiOutlineChatBubbleLeftRight,
  HiOutlineUserGroup
} from 'react-icons/hi2'
export default function WhyCodehatch(){
const features = [
  {
    icon: <HiOutlineVideoCamera />,
    title: 'Live Classes',
    desc: 'Interactive sessions with real-time mentorship'
  },

  {
    icon: <HiOutlineChatBubbleLeftRight />,
    title: 'Recordings',
    desc: 'Access class recordings anytime, anywhere'
  },

  {
    icon: <HiOutlineClipboardDocumentList />,
    title: 'Assignments',
    desc: 'Hands-on practice & personalized feedback'
  },

  {
    icon: <HiOutlineAcademicCap />,
    title: 'Mentorship',
    desc: 'Get guidance and support throughout'
  },

  {
    icon: <HiOutlineClipboardDocumentList />,
    title: 'Certificate',
    desc: 'Earn a certificate of completion'
  },

  {
    icon: <HiOutlineUserGroup />,
    title: 'Community',
    desc: 'Connect, learn and grow together'
  }
]

    return(
        <section id='whycodehatch' className="why">
            <p className="why-subtitle">
                WHY CODEHATCH
            </p>
            <h2>More Than Just Classes</h2>
            <div className="why-grid">
                {features.map((item, index) => (
                    <div className="why-card" key={index}>
                        <div className="why-icon">
                            {item.icon}
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}