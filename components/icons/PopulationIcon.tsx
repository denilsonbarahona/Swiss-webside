export default function PopulationIcon({ props, color = "#575757" }: any) {
  return (
      <svg
        width={20}
        height={14}
        viewBox="0 0 20 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          d="M0.833313 12.8333V10.3333C0.833313 9.86111 0.996507 9.46528 1.3229 9.14583C1.64929 8.82639 2.04165 8.66667 2.49998 8.66667H5.22915C5.50692 8.66667 5.77081 8.73611 6.02081 8.875C6.27081 9.01389 6.4722 9.20139 6.62498 9.4375C7.02776 9.97917 7.52429 10.4028 8.11456 10.7083C8.70484 11.0139 9.33331 11.1667 9.99998 11.1667C10.6805 11.1667 11.316 11.0139 11.9062 10.7083C12.4965 10.4028 12.9861 9.97917 13.375 9.4375C13.5555 9.20139 13.7673 9.01389 14.0104 8.875C14.2535 8.73611 14.5069 8.66667 14.7708 8.66667H17.5C17.9722 8.66667 18.368 8.82639 18.6875 9.14583C19.0069 9.46528 19.1666 9.86111 19.1666 10.3333V12.8333C19.1666 13.0694 19.0868 13.2674 18.9271 13.4271C18.7673 13.5868 18.5694 13.6667 18.3333 13.6667H14.1666C13.9305 13.6667 13.7326 13.5868 13.5729 13.4271C13.4132 13.2674 13.3333 13.0694 13.3333 12.8333V11.7708C12.8472 12.1181 12.3229 12.3819 11.7604 12.5625C11.1979 12.7431 10.6111 12.8333 9.99998 12.8333C9.40276 12.8333 8.81942 12.7396 8.24998 12.5521C7.68054 12.3646 7.15276 12.0972 6.66665 11.75V12.8333C6.66665 13.0694 6.58679 13.2674 6.42706 13.4271C6.26734 13.5868 6.06942 13.6667 5.83331 13.6667H1.66665C1.43054 13.6667 1.23262 13.5868 1.0729 13.4271C0.913174 13.2674 0.833313 13.0694 0.833313 12.8333ZM9.99998 10.3333C9.4722 10.3333 8.9722 10.2118 8.49998 9.96875C8.02776 9.7257 7.63192 9.38889 7.31248 8.95833C7.07637 8.61111 6.78123 8.33681 6.42706 8.13542C6.0729 7.93403 5.68748 7.83334 5.27081 7.83334C5.57637 7.31945 6.2222 6.9132 7.20831 6.61459C8.19442 6.31597 9.12498 6.16667 9.99998 6.16667C10.875 6.16667 11.8055 6.31597 12.7916 6.61459C13.7778 6.9132 14.4236 7.31945 14.7291 7.83334C14.3264 7.83334 13.9444 7.93403 13.5833 8.13542C13.2222 8.33681 12.9236 8.61111 12.6875 8.95833C12.3819 9.40278 11.993 9.74306 11.5208 9.97917C11.0486 10.2153 10.5416 10.3333 9.99998 10.3333ZM3.33331 7.83334C2.63887 7.83334 2.04859 7.59028 1.56248 7.10417C1.07637 6.61806 0.833313 6.02778 0.833313 5.33334C0.833313 4.625 1.07637 4.03125 1.56248 3.55209C2.04859 3.07292 2.63887 2.83334 3.33331 2.83334C4.04165 2.83334 4.6354 3.07292 5.11456 3.55209C5.59373 4.03125 5.83331 4.625 5.83331 5.33334C5.83331 6.02778 5.59373 6.61806 5.11456 7.10417C4.6354 7.59028 4.04165 7.83334 3.33331 7.83334ZM16.6666 7.83334C15.9722 7.83334 15.3819 7.59028 14.8958 7.10417C14.4097 6.61806 14.1666 6.02778 14.1666 5.33334C14.1666 4.625 14.4097 4.03125 14.8958 3.55209C15.3819 3.07292 15.9722 2.83334 16.6666 2.83334C17.375 2.83334 17.9687 3.07292 18.4479 3.55209C18.9271 4.03125 19.1666 4.625 19.1666 5.33334C19.1666 6.02778 18.9271 6.61806 18.4479 7.10417C17.9687 7.59028 17.375 7.83334 16.6666 7.83334ZM9.99998 5.33334C9.30554 5.33334 8.71526 5.09028 8.22915 4.60417C7.74304 4.11806 7.49998 3.52778 7.49998 2.83334C7.49998 2.125 7.74304 1.53125 8.22915 1.05209C8.71526 0.572919 9.30554 0.333336 9.99998 0.333336C10.7083 0.333336 11.3021 0.572919 11.7812 1.05209C12.2604 1.53125 12.5 2.125 12.5 2.83334C12.5 3.52778 12.2604 4.11806 11.7812 4.60417C11.3021 5.09028 10.7083 5.33334 9.99998 5.33334Z"
          fill={color}
        />
      </svg>
  );
}