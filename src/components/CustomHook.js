import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const CustomHook = (refTab = null, refDivs = null) => {
    const thisTab = refTab;
    const thisDivs = refDivs;
    const activeTab = useSelector(state => state.activeTab);

    useEffect(() => {
        if(thisTab.current.classList.contains(activeTab)){
            const componentPoint = thisTab.current;
            componentPoint.scrollIntoView({ behavior: 'smooth' }); 
        }
        
        if(thisDivs !== null){
            thisDivs.current.forEach(div => {
                div.classList.add('animation');
            })

            const handleScroll = () => {
                const scrollPosition = window.scrollY;
                thisDivs.current.forEach(div => {
                    const offsetTop = div.getBoundingClientRect().top + scrollPosition;
                    if(scrollPosition >= offsetTop - (window.innerHeight / (1.5))) {
                        div.classList.add('active');
                    } else {
                        div.classList.remove('active');
                    }
                })
            }
            window.addEventListener('scroll', handleScroll);
        }
    }, [activeTab])
}

export default CustomHook