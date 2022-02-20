

export const Clock = ({ width, height, color }) => {
    return (
        <svg width={width} height={height} className="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" />
            <path d="M15.7096 15.93C15.5796 15.93 15.4496 15.9 15.3296 15.82L12.2296 13.97C11.4596 13.51 10.8896 12.5 10.8896 11.61V7.51001C10.8896 7.10001 11.2296 6.76001 11.6396 6.76001C12.0496 6.76001 12.3896 7.10001 12.3896 7.51001V11.61C12.3896 11.97 12.6896 12.5 12.9996 12.68L16.0996 14.53C16.4596 14.74 16.5696 15.2 16.3596 15.56C16.2096 15.8 15.9596 15.93 15.7096 15.93Z" />
        </svg>
    )
}

export const TextBoldIcon = ({ width, height, color })=>{
    return(
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.87988 4.5C4.87988 3.4 5.77988 2.5 6.87988 2.5H11.9999C14.6199 2.5 16.7499 4.63 16.7499 7.25C16.7499 9.87 14.6199 12 11.9999 12H4.87988V4.5Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4.87988 12H14.3799C16.9999 12 19.1299 14.13 19.1299 16.75C19.1299 19.37 16.9999 21.5 14.3799 21.5H6.87988C5.77988 21.5 4.87988 20.6 4.87988 19.5V12V12Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    )
}

export const MicrophoneIcon = ({width, height, color})=>{
return(
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 15.5C14.21 15.5 16 13.71 16 11.5V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11.5C8 13.71 9.79 15.5 12 15.5Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4.3501 9.6499V11.3499C4.3501 15.5699 7.7801 18.9999 12.0001 18.9999C16.2201 18.9999 19.6501 15.5699 19.6501 11.3499V9.6499" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10.6101 6.43012C11.5101 6.10012 12.4901 6.10012 13.3901 6.43012" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M11.2 8.55007C11.73 8.41007 12.28 8.41007 12.81 8.55007" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 19V22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

)
}
export const TextItalicIcon = ({width, height, color })=>{
    return(
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.62012 3H18.8701" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5.12012 21H14.3701" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14.25 3L9.75 21" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    )
}

export const LinkIcon = ({width, height, color})=>{
    return(
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5 12C13.5 15.18 10.93 17.75 7.75 17.75C4.57 17.75 2 15.18 2 12C2 8.82 4.57 6.25 7.75 6.25" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 12C10 8.69 12.69 6 16 6C19.31 6 22 8.69 22 12C22 15.31 19.31 18 16 18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const TextAlignIcon = ({width, height, color})=>{
    return(
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4.5H3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 9.5H3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 14.5H3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 19.5H3" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    )
}

// export const TextAlignIcon = ({width, height, color})=>{
//     return(
//         <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//        <path d="M12 15.5C14.21 15.5 16 13.71 16 11.5V6C16 3.79 14.21 2 12 2C9.79 2 8 3.79 8 6V11.5C8 13.71 9.79 15.5 12 15.5Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// <path d="M4.3501 9.6499V11.3499C4.3501 15.5699 7.7801 18.9999 12.0001 18.9999C16.2201 18.9999 19.6501 15.5699 19.6501 11.3499V9.6499" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// <path d="M10.6101 6.43012C11.5101 6.10012 12.4901 6.10012 13.3901 6.43012" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// <path d="M11.2 8.55007C11.73 8.41007 12.28 8.41007 12.81 8.55007" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// <path d="M12 19V22" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
// </svg>
//     )
// }

export const VideoIcon = ({width, height, color})=>{
    return(
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M12.53 20.4201H6.21C3.05 20.4201 2 18.3201 2 16.2101V7.79008C2 4.63008 3.05 3.58008 6.21 3.58008H12.53C15.69 3.58008 16.74 4.63008 16.74 7.79008V16.2101C16.74 19.3701 15.68 20.4201 12.53 20.4201Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.52 17.0999L16.74 15.1499V8.83989L19.52 6.88989C20.88 5.93989 22 6.51989 22 8.18989V15.8099C22 17.4799 20.88 18.0599 19.52 17.0999Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.5 11C12.3284 11 13 10.3284 13 9.5C13 8.67157 12.3284 8 11.5 8C10.6716 8 10 8.67157 10 9.5C10 10.3284 10.6716 11 11.5 11Z" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    )
}

export const CodeIcon = ({width, height, color})=>{
    return(
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M8 10L6 12L8 14" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 10L18 12L16 14" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 9.66992L11 14.33" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    )
}

export const HelpIcon = ({ width, height, color }) => {
    return (
        <svg width={width} height={height} className="icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 24 24" enableBackground="0 0 24 24" xmlSpace="preserve">
            <path className="st0" d="M17.2,2.6C17,2.8,17,3.1,17,3.4c0,0.3,0.1,0.7,0.2,1c0.6,0.4,1.1,0.9,1.6,1.4c0.2,0.1,0.4,0.1,0.6,0.1
	c0.4,0,0.8-0.1,1.2-0.3C19.7,4.3,18.5,3.3,17.2,2.6z M21,6.1c-0.4,0.3-1,0.4-1.5,0.4c1.1,1.5,1.8,3.4,1.8,5.5c0,5.1-4.2,9.2-9.2,9.2
	S2.8,17.1,2.8,12S6.9,2.8,12,2.8c1.6,0,3,0.4,4.3,1.1c0-0.1,0-0.3,0-0.4c0-0.4,0.1-0.8,0.2-1.2c-1.4-0.6-2.9-1-4.5-1
	C6.1,1.2,1.2,6.1,1.2,12S6.1,22.8,12,22.8S22.8,17.9,22.8,12C22.8,9.8,22.1,7.8,21,6.1z" />
            <path className="st0" d="M8.8,9.9c0-0.4,0.1-0.7,0.4-1.1s0.6-0.7,1-0.9s1-0.4,1.6-0.4c0.6,0,1.1,0.1,1.5,0.3c0.4,0.2,0.8,0.5,1,0.9
	s0.4,0.8,0.4,1.2c0,0.3-0.1,0.6-0.2,0.9s-0.3,0.5-0.5,0.6s-0.5,0.5-1,0.9c-0.1,0.1-0.2,0.2-0.3,0.3s-0.1,0.2-0.2,0.3
	s-0.1,0.2-0.1,0.2c0,0.1-0.1,0.2-0.1,0.4C12.2,13.8,12,14,11.6,14c-0.2,0-0.4-0.1-0.5-0.2s-0.2-0.3-0.2-0.6c0-0.3,0.1-0.6,0.2-0.9
	s0.2-0.5,0.4-0.6s0.4-0.4,0.7-0.6c0.2-0.2,0.4-0.4,0.5-0.5s0.2-0.2,0.3-0.4C13,10.1,13,9.9,13,9.8c0-0.3-0.1-0.6-0.3-0.8
	s-0.5-0.3-0.9-0.3c-0.4,0-0.7,0.1-0.9,0.3s-0.4,0.5-0.5,1c-0.1,0.4-0.4,0.7-0.8,0.7c-0.2,0-0.4-0.1-0.6-0.2S8.8,10,8.8,9.9z
	 M11.7,16.3c-0.2,0-0.4-0.1-0.6-0.2s-0.3-0.4-0.3-0.6c0-0.2,0.1-0.5,0.3-0.6s0.4-0.3,0.6-0.3c0.2,0,0.5,0.1,0.6,0.3s0.3,0.4,0.3,0.6
	c0,0.3-0.1,0.5-0.3,0.6S11.9,16.3,11.7,16.3z" />
            <path className="st1" d="M21.8,3.4c0,0.9-0.5,1.7-1.3,2.1c-0.3,0.2-0.7,0.3-1.2,0.3c-0.2,0-0.4,0-0.6-0.1c-0.7-0.2-1.3-0.7-1.6-1.4
	c-0.1-0.3-0.2-0.6-0.2-1c0-0.3,0-0.6,0.2-0.8C17.5,1.6,18.4,1,19.4,1C20.8,1,21.8,2.1,21.8,3.4z"/>
            <path className="st0" d="M21.8,3.4c0,0.9-0.5,1.7-1.3,2.1c-0.3,0.2-0.7,0.3-1.2,0.3c-0.2,0-0.4,0-0.6-0.1c-0.7-0.2-1.3-0.7-1.6-1.4
	c-0.1-0.3-0.2-0.6-0.2-1c0-0.3,0-0.6,0.2-0.8C17.5,1.6,18.4,1,19.4,1C20.8,1,21.8,2.1,21.8,3.4z"  />
        </svg>
    )
}

export const SearchIcon = ({ width, height }) => {
    return (
        <svg width={width} height={height} className="icon" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 24 24" enableBackground="0 0 24 24;" xmlSpace="preserve">
            <path className="st0" d="M11.5,21.8c-5.7,0-10.2-4.6-10.2-10.2S5.8,1.2,11.5,1.2s10.2,4.6,10.2,10.2S17.1,21.8,11.5,21.8z M11.5,2.8
	c-4.8,0-8.8,3.9-8.8,8.8s3.9,8.8,8.8,8.8s8.8-3.9,8.8-8.8S16.3,2.8,11.5,2.8z"/>
            <path className="st0" d="M22,22.7c-0.2,0-0.4-0.1-0.5-0.2l-2-2c-0.3-0.3-0.3-0.8,0-1.1c0.3-0.3,0.8-0.3,1.1,0l2,2c0.3,0.3,0.3,0.8,0,1.1
	C22.4,22.7,22.2,22.7,22,22.7z"/>
        </svg>
    )
}

export const ArrowDown = ({ width, height }) => {
    return (
        <svg width={width} height={height} className="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.9995 16.8001C11.2995 16.8001 10.5995 16.5301 10.0695 16.0001L3.54953 9.48014C3.25953 9.19014 3.25953 8.71014 3.54953 8.42014C3.83953 8.13014 4.31953 8.13014 4.60953 8.42014L11.1295 14.9401C11.6095 15.4201 12.3895 15.4201 12.8695 14.9401L19.3895 8.42014C19.6795 8.13014 20.1595 8.13014 20.4495 8.42014C20.7395 8.71014 20.7395 9.19014 20.4495 9.48014L13.9295 16.0001C13.3995 16.5301 12.6995 16.8001 11.9995 16.8001Z" />
        </svg>
    )
}


export const EditIcon = ({ width, height, className }) => {
    return (
        <svg width={width} height={height} viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg">
            <path d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H11C11.41 1.25 11.75 1.59 11.75 2C11.75 2.41 11.41 2.75 11 2.75H9C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V13C21.25 12.59 21.59 12.25 22 12.25C22.41 12.25 22.75 12.59 22.75 13V15C22.75 20.43 20.43 22.75 15 22.75Z" fill="#292D32" />
            <path d="M8.49935 17.6901C7.88935 17.6901 7.32935 17.4701 6.91935 17.0701C6.42935 16.5801 6.21935 15.8701 6.32935 15.1201L6.75935 12.1101C6.83935 11.5301 7.21935 10.7801 7.62935 10.3701L15.5093 2.49006C17.4993 0.500059 19.5193 0.500059 21.5093 2.49006C22.5993 3.58006 23.0893 4.69006 22.9893 5.80006C22.8993 6.70006 22.4193 7.58006 21.5093 8.48006L13.6293 16.3601C13.2193 16.7701 12.4693 17.1501 11.8893 17.2301L8.87935 17.6601C8.74935 17.6901 8.61935 17.6901 8.49935 17.6901ZM16.5693 3.55006L8.68935 11.4301C8.49935 11.6201 8.27935 12.0601 8.23935 12.3201L7.80935 15.3301C7.76935 15.6201 7.82935 15.8601 7.97935 16.0101C8.12935 16.1601 8.36935 16.2201 8.65935 16.1801L11.6693 15.7501C11.9293 15.7101 12.3793 15.4901 12.5593 15.3001L20.4393 7.42006C21.0893 6.77006 21.4293 6.19006 21.4793 5.65006C21.5393 5.00006 21.1993 4.31006 20.4393 3.54006C18.8393 1.94006 17.7393 2.39006 16.5693 3.55006Z" />
            <path d="M19.8496 9.82978C19.7796 9.82978 19.7096 9.81978 19.6496 9.79978C17.0196 9.05978 14.9296 6.96978 14.1896 4.33978C14.0796 3.93978 14.3096 3.52978 14.7096 3.40978C15.1096 3.29978 15.5196 3.52978 15.6296 3.92978C16.2296 6.05978 17.9196 7.74978 20.0496 8.34978C20.4496 8.45978 20.6796 8.87978 20.5696 9.27978C20.4796 9.61978 20.1796 9.82978 19.8496 9.82978Z" />
        </svg>
    )
}


export const ThreadIcon = ({ width, height, className }) => {
    return (

        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z" stroke="#ffffff" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 8H17" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7 13H13" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    )
}

export const MenuIcon = ({ width, height, color, className }) => {
    return (
        <svg width={width} height={height} fill={color} stroke={color} className={className} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 24 24" enableBackground="new 0 0 24 24;" xmlSpace="preserve">
            <circle cx="12" cy="3" r="1.1" />
            <circle cx="12" cy="12" r="1.1" />
            <circle cx="12" cy="21" r="1.1" />
        </svg>
    )
}



export const CloseIcon = ({ width, height, color, className }) => {
    return (
        <svg width={width} height={height}  fill="none" className={className} version="1.1"  xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" enableBackground="new 0 0 24 24;" xmlSpace="preserve">
            <path d="M9.16998 14.83L14.83 9.17004" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14.83 14.83L9.16998 9.17004" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

export const HeadphoneIcon = ({width, height, color})=>{
    return(
        <svg width={width} height={height}  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.46005 18.49V15.57C5.46005 14.6 6.22005 13.73 7.30005 13.73C8.27005 13.73 9.14005 14.49 9.14005 15.57V18.38C9.14005 20.33 7.52005 21.9501 5.57005 21.9501C3.62005 21.9501 2.00005 20.32 2.00005 18.38V12.22C1.89005 6.60005 6.33005 2.05005 11.95 2.05005C17.57 2.05005 22 6.60005 22 12.11V18.2701C22 20.2201 20.38 21.84 18.43 21.84C16.48 21.84 14.86 20.2201 14.86 18.2701V15.46C14.86 14.49 15.62 13.62 16.7 13.62C17.67 13.62 18.54 14.38 18.54 15.46V18.49" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

    )
}

export const MessageIcon = ({width, height, color})=>{
    return(
        <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 10.5H15.5" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 18.4299H11L15.45 21.39C16.11 21.83 17 21.3599 17 20.5599V18.4299C20 18.4299 22 16.4299 22 13.4299V7.42993C22 4.42993 20 2.42993 17 2.42993H7C4 2.42993 2 4.42993 2 7.42993V13.4299C2 16.4299 4 18.4299 7 18.4299Z" stroke={color} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

    )
}

export const SendIcon = ({width, height, color, className})=>{
    return(
        <svg width={width} height={height} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.0693 8.50867L9.50929 4.22867C3.75929 1.34867 1.39929 3.70867 4.27929 9.45867L5.14929 11.1987C5.39929 11.7087 5.39929 12.2987 5.14929 12.8087L4.27929 14.5387C1.39929 20.2887 3.74929 22.6487 9.50929 19.7687L18.0693 15.4887C21.9093 13.5687 21.9093 10.4287 18.0693 8.50867ZM14.8393 12.7487H9.43929C9.02929 12.7487 8.68929 12.4087 8.68929 11.9987C8.68929 11.5887 9.02929 11.2487 9.43929 11.2487H14.8393C15.2493 11.2487 15.5893 11.5887 15.5893 11.9987C15.5893 12.4087 15.2493 12.7487 14.8393 12.7487Z" fill={color}/>
</svg>


    )
}

export const AddIcon = ({width, height, color, className})=>{
    return(
        <svg width={width} height={height}  className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 12H18" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 18V6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )

}

export const ArrownDownBold = ({ width, height, className })=>{
     return(
        <svg width={width} height={height} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z"/>
        </svg>
        
     )
}

export const ArrowRightBold = ({ width, height, className })=>{
    return(
        <svg width={width} height={height} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.1997 10.4919L13.2297 8.52188L10.0197 5.31188C9.33969 4.64188 8.17969 5.12188 8.17969 6.08188V12.3119V17.9219C8.17969 18.8819 9.33969 19.3619 10.0197 18.6819L15.1997 13.5019C16.0297 12.6819 16.0297 11.3219 15.1997 10.4919Z"/>
        </svg>
    )
}
export const SlackConnect = ({ width, height, className }) => {
    return (
        <svg version="1.1" width={width} height={height} className={className} id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 24 24" enableBackground="0 0 24 24;" xmlSpace="preserve">
            <path className="st0" d="M23.2,11.3l-0.1-0.1c0,0,0,0,0,0L17,5.1c0,0,0,0-0.1-0.1l-0.1-0.1c0,0,0,0-0.1-0.1c-0.2-0.1-0.3-0.2-0.5-0.2
	c-0.2,0-0.4,0.1-0.5,0.2c0,0,0,0-0.1,0.1L15.4,5c0,0,0,0-0.1,0.1L14,6.5l-1.1,1l-3.7,3.7c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0
	c0,0-0.1,0.1-0.1,0.1c-0.1,0.1-0.1,0.2-0.2,0.4c-0.1,0.3,0,0.6,0.2,0.9c0,0,0.1,0.1,0.1,0.1l6.2,6.2c0,0,0.1,0.1,0.1,0.1
	c0,0,0,0,0.1,0l0.2,0.1c0,0,0.1,0,0.1,0c0.2,0.1,0.4,0.1,0.6,0c0.2,0,0.3-0.1,0.4-0.2c0,0,0.1-0.1,0.1-0.1l6.1-6.1c0,0,0,0,0,0
	c0,0,0,0,0.1-0.1l0.1-0.1c0,0,0-0.1,0-0.1c0.1-0.2,0.1-0.4,0.1-0.6C23.4,11.7,23.3,11.5,23.2,11.3z M16.2,17.5L10.6,12l0.2-0.2
	L14,8.6l1-1.1L16,6.6c0,0,0,0,0,0l0.2-0.2l0.2,0.2c0,0,0,0,0,0l5.3,5.3L16.2,17.5z"/>
            <path className="st0" d="M11.3,16.5c0,0.1,0,0.3-0.1,0.4c0,0,0,0,0,0l-0.2,0.2c0,0,0,0,0,0l-0.4,0.4l-1.4,1.4c0,0-0.1,0.1-0.1,0.1
	c-0.1,0.1-0.2,0.2-0.4,0.2c-0.2,0.1-0.4,0-0.6,0c0,0,0,0-0.1,0l-0.2-0.1c0,0-0.1,0-0.1,0c0,0-0.1-0.1-0.1-0.1l-6.2-6.2
	c0,0-0.1-0.1-0.1-0.1c-0.2-0.2-0.3-0.5-0.2-0.9c0-0.1,0.1-0.3,0.2-0.4c0,0,0.1-0.1,0.1-0.1c0,0,0,0,0,0s0,0,0,0c0,0,0,0,0,0l6.1-6.1
	c0,0,0-0.1,0.1-0.1L7.7,5c0,0,0,0,0.1-0.1c0.2-0.1,0.3-0.2,0.5-0.2s0.4,0.1,0.5,0.2c0,0,0,0,0.1,0.1l0.1,0.1c0,0,0,0,0.1,0.1
	l1.6,1.7c0,0,0,0,0,0l0.4,0.4c0,0,0,0,0,0c0,0.1,0.1,0.2,0.1,0.3c0,0.4-0.3,0.8-0.8,0.8c-0.2,0-0.4-0.1-0.5-0.2c0,0,0,0-0.1-0.1
	L8.5,6.7c0,0,0,0,0,0L8.3,6.5L8.1,6.7c0,0,0,0,0,0L3,11.8L2.8,12l5.6,5.6l0.2-0.2l0.9-0.9L9.9,16l0.2-0.2c0.1-0.1,0.3-0.1,0.4-0.1
	c0.2,0,0.3,0,0.4,0.1c0,0,0,0,0.1,0l0.1,0.1c0,0,0,0,0,0.1C11.2,16.2,11.3,16.3,11.3,16.5z"/>
        </svg>
    )
}