import React from 'react'

export const Button = () => {
    return (
        <div>
            
        </div>
    )
}

export const Styledbutton = styled.button`
  button,
  .btn {
    cursor: pointer;
    appearance: none;
    color:white;
    background: $primary-400;
    border: none;
    border-radius:$borderRadius;
    letter-spacing:$letterSpacing;
    padding: 0.375rem 0.75rem;
    box-shadow:$shadow-1;
    transition:$transition;
    text-transform: capitalize;
  }
  button:hover,
  .btn:hover {
    color: white;
    background: $primary-200;
    box-shadow:$shadow-2;
  }
  button.small {
    padding: 0.25rem 0.5rem;
    font-size: $smallText;
  }
  button.hipster {
    color: $primary-100;
    background: primary-50;
    box-shadow: $shadow-1;
  }
  button.hipster:hover {
    background: $primary-100;
    box-shadow: $shadow-2;
  }
  button.block {
    width: 100%;
  }
`