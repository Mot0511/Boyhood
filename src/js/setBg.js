import home from '../img/home.jpg'
import school from '../img/school.jpg'
import classRoom from '../img/class.jpeg'
import street from '../img/street.jpg'

export default (image, setImage, nextStep) => {
    if (image === 'class'){
        setImage(classRoom)
    } else if (image === 'home'){
        setImage(home)
    } else if (image === 'school'){
        setImage(school)
    } else if (image === 'street'){
        setImage(street)
    }
    nextStep()
    return ''
}