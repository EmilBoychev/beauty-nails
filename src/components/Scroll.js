import { useRef } from 'react';

export const Scroll = (props) => {

    const ref = useRef(null);

    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: props });

    }
    return handleClick

}