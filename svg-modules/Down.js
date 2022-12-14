import React from 'react';
import Svg, {Path} from "react-native-svg";
import {gStyles} from "../styles/style";

export const Down = ({openText}) => {
    return (
        <Svg width="13" height="8" style={openText ? gStyles.iconUp : gStyles.iconDown} viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path fill-rule="evenodd" clip-rule="evenodd"
                  d="M2.3475 0.326951C1.91157 -0.108984 1.20478 -0.108984 0.768845 0.326951C0.332911 0.762885 0.332911 1.46967 0.768845 1.90561L5.65257 6.78933C6.0885 7.22526 6.79529 7.22526 7.23122 6.78933L12.1149 1.90561C12.5509 1.46967 12.5509 0.762885 12.1149 0.326951C11.679 -0.108984 10.9722 -0.108984 10.5363 0.326951L6.44189 4.42134L2.3475 0.326951Z"
                  fill="#FF7700"/>
        </Svg>
    );
};