// Using the Modal Component:
//     You need to create a state var in the component you call it in order to use, here's a rough example:

//     const [ isVisble, setIsVisible] = useState(false)

//     return (
//         {isVisible && (
//             <Modal onClose={() => setIsVisible(false)}>
//                 Children go here
//             </Modal>
//         )}
//     )

//     props:
//         onClose: callback function to set your local state to close modal
//         title: string for populating the title section

import React, { useEffect, useRef } from 'react';

import { Container, FormContainer, CloseButton, TopContainer, ContentContainer, Title } from './styled';

const Modal = (props) => {
    const {
        onClose,
        children,
        hideHeader,
        title,
        noPaddingBottom,
        noPadding,
        noOverflow,
        unclosable,
        shouldModalAnimate = true,
        maxWidth,
    } = props;

    const shade = useRef(null);

    // Locks Body Scroll
    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const handleShadeClick = (event) => {
        if (event.target === shade.current && !unclosable) {
            onClose();
        }
    };

    return (
        <Container ref={shade} onClick={handleShadeClick} shouldModalAnimate={shouldModalAnimate}>
            <FormContainer maxWidth={maxWidth}>
                {!hideHeader && (
                    <TopContainer border={title}>
                        {title && <Title>{title}</Title>}
                        {!unclosable && (
                            <CloseButton onClick={onClose} type="button">
                                <img src={'/images/modal-exit-icon.svg'} alt="Close Modal" />
                            </CloseButton>
                        )}
                    </TopContainer>
                )}
                <ContentContainer noPaddingBottom={noPaddingBottom} noOverflow={noOverflow} noPadding={noPadding}>
                    {children}
                </ContentContainer>
            </FormContainer>
        </Container>
    );
};

export default Modal;
