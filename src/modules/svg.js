export const Arrow = (props) => (
  <svg
    width={props.width ? props.width : undefined}
    height={props.height ? props.height : undefined}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" fill="white" fillOpacity="0.01" />
    <path
      d="M19 12L31 24L19 36"
      stroke={props.fill ? props.fill : undefined}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DoubleArrow = (props) => (
  <svg
    width={props.width ? props.width : undefined}
    height={props.height ? props.height : undefined}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="48" height="48" fill="white" fillOpacity="0.01" />
    <path
      d="M12 12L24 24L12 36"
      stroke={props.fill ? props.fill : undefined}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24 12L36 24L24 36"
      stroke={props.fill ? props.fill : undefined}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LogOut = (props) => (
  <svg
    width={props.width ? props.width : undefined}
    height={props.height ? props.height : undefined}
    fill={props.fill ? props.fill : undefined}
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 511.989 511.989"
    xmlSpace="preserve"
  >
    <g>
      <g>
        <g>
          <path
            d="M110.933,221.782c-4.71,0-8.533,3.823-8.533,8.533v51.2c0,4.71,3.823,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-51.2
                  C119.467,225.605,115.644,221.782,110.933,221.782z"
          />
          <path
            d="M111.855,2.304L31.172,34.586C8.448,43,0,54.418,0,76.715v358.477c0,22.298,8.448,33.715,30.959,42.061l81.058,32.427
                  c4.011,1.519,8.038,2.287,11.981,2.287c17.152,0,29.602-14.336,29.602-34.091V34.049C153.6,9.78,134.246-6.126,111.855,2.304z
                   M136.533,477.876c0,10.18-5.035,17.024-12.535,17.024c-1.869,0-3.883-0.401-5.803-1.118L37.103,461.33
                  c-16.102-5.965-20.036-11.102-20.036-26.138V76.715c0-15.036,3.934-20.164,20.241-26.206l80.725-32.29
                  c2.082-0.785,4.087-1.186,5.956-1.186c7.501,0,12.544,6.835,12.544,17.016V477.876z"
          />
          <path
            d="M178.133,51.115h120.533c14.114,0,25.6,11.486,25.6,25.6v128c0,4.71,3.814,8.533,8.533,8.533
                  c4.719,0,8.533-3.823,8.533-8.533v-128c0-23.526-19.14-42.667-42.667-42.667H178.133c-4.71,0-8.533,3.823-8.533,8.533
                  S173.423,51.115,178.133,51.115z"
          />
          <path
            d="M332.8,298.582c-4.719,0-8.533,3.823-8.533,8.533v128c0,14.114-11.486,25.6-25.6,25.6H179.2
                  c-4.71,0-8.533,3.823-8.533,8.533s3.823,8.533,8.533,8.533h119.467c23.526,0,42.667-19.14,42.667-42.667v-128
                  C341.333,302.405,337.519,298.582,332.8,298.582z"
          />
          <path
            d="M511.343,252.655c-0.435-1.05-1.058-1.988-1.852-2.782l-85.325-85.333c-3.337-3.336-8.73-3.336-12.066,0
                  c-3.337,3.337-3.337,8.73,0,12.066l70.767,70.775H196.267c-4.71,0-8.533,3.823-8.533,8.533c0,4.71,3.823,8.533,8.533,8.533
                  h286.601L412.1,335.215c-3.337,3.337-3.337,8.73,0,12.066c1.664,1.664,3.849,2.5,6.033,2.5c2.185,0,4.369-0.836,6.033-2.5
                  l85.325-85.325c0.794-0.794,1.417-1.732,1.852-2.782C512.205,257.093,512.205,254.738,511.343,252.655z"
          />
        </g>
      </g>
    </g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
    <g></g>
  </svg>
);

export const More = (props) => (
  <svg
    width={props.width ? props.width : undefined}
    height={props.height ? props.height : undefined}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 8C2 7.44772 2.44772 7 3 7H21C21.5523 7 22 7.44772 22 8C22 8.55228 21.5523 9 21 9H3C2.44772 9 2 8.55228 2 8Z"
      fill={props.fill ? props.fill : undefined}
    />
    <path
      d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z"
      fill={props.fill ? props.fill : undefined}
    />
    <path
      d="M3 15C2.44772 15 2 15.4477 2 16C2 16.5523 2.44772 17 3 17H15C15.5523 17 16 16.5523 16 16C16 15.4477 15.5523 15 15 15H3Z"
      fill={props.fill ? props.fill : undefined}
    />
  </svg>
);
