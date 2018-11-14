import React from 'react';
class Footer extends React.Component
{
    constructor(props)
    {
    super(props);
    this.state={email: "Tunglkps00866@gmail.com" };
    }
    render()
    {
        return(
            <div>Copyright {this.state.email}</div>
        );
    }
}
export default Footer;