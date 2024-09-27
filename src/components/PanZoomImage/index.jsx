import React, { useEffect, useRef, useState } from 'react'
import img from '/map.jpg'
import SvgContent from './SvgContent'

export default function PanZoomImage() {
    const clientRef = useRef();
    const [isPanning, setIsPanning] = useState(false);
    const [position, setPosition] = useState({
        screen: "portrait",
        windowHeight: 0,
        windowWidth: 0,
        left: 0,
        top: 0,
        oldX: 0,
        oldY: 0,
        x: 0,
        y: 0,
        z: 1,
    })

    // mouse down
    function handleMouseDown(e) {
        console.log('mouse down');
        if (position.z > 1.1) {
            setIsPanning(true);

            const eventClientX = e.clientX ? e.clientX : e.touches[0].clientX;
            const eventClientY = e.clientY ? e.clientY : e.touches[0].clientY;

            setPosition({
                ...position,
                oldX: eventClientX,
                oldY: eventClientY
            })
        }


    }

    // mouse move
    function handleMouseMove(e) {
        // console.log(e)
        if (isPanning) {
            // let newX, newY, xDir, yDir;
            const clientRect = clientRef.current.getBoundingClientRect();
            const eventClientX = e.clientX ? e.clientX : e.touches[0].clientX;
            const eventClientY = e.clientY ? e.clientY : e.touches[0].clientY;

            // console.log("client left", clientRect.left)
            // console.log('eventClientX', eventClientX);
            // console.log('old X', position.oldX);
            if (clientRect.left >= -20) {
                // console.log(position)
                setPosition({
                    ...position,
                    x: position.x - 40
                })
                return
            }

            if (clientRect.right <= (window.innerWidth + 40)) {
                // console.log(clientRect)
                // console.log(position);
                setPosition({
                    ...position,
                    x: position.x + 40
                })
                return
            }

            if (clientRect.top >= -10) {
                // console.log('top', position)
                // console.log('top', clientRect)
                setPosition({
                    ...position,
                    y: position.y - 20
                })
                return
            }

            if (clientRect.bottom <= (window.innerHeight + 20)) {
                // console.log('bottom', position)
                // console.log('bottom', clientRect)
                setPosition({
                    ...position,
                    y: position.y + 40
                })
                return
            }

            // console.log("new x", newX)
            setPosition({
                ...position,
                x: position.x + eventClientX - position.oldX,
                y: position.y + eventClientY - position.oldY,
                oldX: eventClientX,
                oldY: eventClientY,
            });
        }
    }
    // mouse up
    function handleMouseUp(e) {
        console.log('mouse up')
        setIsPanning(false)
    }

    // zoom on wheel
    function handleWheel(e) {

        const clientRect = clientRef.current.getBoundingClientRect();
        const sign = Math.sign(e.deltaY) / 10;
        const scale = 1 - sign;

        if ((clientRect.top >= -10 || clientRect.bottom <= (window.innerHeight + 20) || clientRect.left >= -20 || clientRect.right <= (window.innerWidth + 20)) && sign > 0) {
            console.log('wheel edge');
            console.log('sign', sign);
            console.log('scale', scale);
            let xTransition, yTransition;
            if (position.screen === 'portrait') {
                xTransition = (window.innerWidth / 2) * -1
                yTransition = (window.innerWidth / 2) * -1
            } else {

                xTransition = (window.innerHeight / 2) * -1
                yTransition = (window.innerHeight / 2) * -1
            }

            setPosition({
                ...position,
                x: xTransition,
                y: yTransition,
                left: position.windowWidth / 2,
                top: position.windowHeight / 2,
                z: 1
            })
        }
        else {
            console.log('scale', scale)
            setPosition({
                ...position,
                z: position.z * scale > 1.8 || position.z * scale < 1.01 ? position.z : position.z * scale
            })
        }
    }

    // adjust map on window resize
    function handleResize(e) {
        let deviceType, xTransition, yTransition;
        if (window.innerWidth >= window.innerHeight) {
            deviceType = 'portrait'
            xTransition = (window.innerWidth / 2) * -1
            yTransition = (window.innerWidth / 2) * -1
        } else {
            deviceType = 'landscape'
            xTransition = (window.innerHeight / 2) * -1
            yTransition = (window.innerHeight / 2) * -1
        }
        setPosition({
            ...position,
            screen: deviceType,
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth,
            left: window.innerWidth / 2,
            top: window.innerHeight / 2,
            x: xTransition,
            y: yTransition,
        })
    }

    // set up map size on first load
    useEffect(() => {
        let deviceType, xTransition, yTransition;
        if (window.innerWidth >= window.innerHeight) {
            deviceType = 'portrait'
            xTransition = (window.innerWidth / 2) * -1
            yTransition = (window.innerWidth / 2) * -1
        } else {
            deviceType = 'landscape'
            xTransition = (window.innerHeight / 2) * -1
            yTransition = (window.innerHeight / 2) * -1
        }
        setPosition({
            ...position,
            screen: deviceType,
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth,
            left: window.innerWidth / 2,
            top: window.innerHeight / 2,
            x: xTransition,
            y: yTransition,
        })

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    console.log("position", position);
    // console.log("is panning", isPanning)
    // console.log(clientRef.current.getBoundingClientRect()
    return (
        <div className='relative bg-slate-600 w-full h-full overflow-hidden' onWheel={handleWheel} onMouseDown={handleMouseDown} onTouchStart={handleMouseDown} onMouseUp={handleMouseUp} onTouchEnd={handleMouseUp} onMouseMove={handleMouseMove} onTouchMove={handleMouseMove}>
            <svg viewBox="0 0 2048 2048" fill="none" ref={clientRef} preserveAspectRatio="xMaxYMax slice" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{
                    width: `${position.screen === 'portrait' ? position.windowWidth : position.windowHeight}px`,
                    height: `${position.screen === 'portrait' ? position.windowWidth : position.windowHeight}px`,
                    position: 'absolute',
                    left: `${position.left}px`,
                    top: `${position.top}px`,
                    transform: `translate(${position.x}px,${position.y}px) scale(${position.z})`
                }}>
                <image
                    xlinkHref={img}
                    preserveAspectRatio="none"
                ></image>
                <SvgContent />
            </svg>
        </div>
    )
}


