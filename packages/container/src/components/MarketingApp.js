import React, {useRef, useEffect} from "react";
import { mount } from "marketing/MarketingApp";
import { useHistory } from "react-router-dom";

export default () => {
    const ref = useRef();
    const history = useHistory();
    useEffect(() => {
        const { onContainerNavigate } = mount(ref.current, {
            initialPathName: history.location.pathname,
            onNavigate: ({pathname:  nextPathname}) => {
                const {pathname} = history.location;
                console.log("SubApp Path changed ", { pathname, nextPathname })
                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            }
        });
        history.listen(onContainerNavigate)
    }, [])
    return <div ref={ref}></div>
}