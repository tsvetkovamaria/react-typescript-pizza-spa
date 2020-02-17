import React from "react";

export interface User {
    name: string
    email: string
    address: string
    phone: string
}

interface State {
    user: User
}

interface Props {
    onChange(user: User): void
}

class UserForm extends React.Component<Props, State>{
    state: State = {
        user: {
            name: '',
            email: '',
            phone: '',
            address: ''
        }
    };
    onTextChange = (e: any): void => {
        let user:any = this.state.user;
        user[e.target.name] = e.target.value;
        this.setState({user});
        this.props.onChange(user);
    };

    render() {
        return  (
            <div className="grid grid-cols-2 gap-10 py-4 mb-8">
                <div>
                    <label>
                        <span className="block text-sm mb-2">Name</span>
                        <input
                            type="text"
                            name="name"
                            className="block w-full border p-2"
                            value={this.state.user.name}
                            onChange={this.onTextChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <span className="block text-sm mb-2">E-mail Address</span>
                        <input
                            type="text"
                            name="email"
                            className="block w-full border p-2"
                            value={this.state.user.email}
                            onChange={this.onTextChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <span className="block text-sm mb-2">Address</span>
                        <input
                            type="text"
                            name="address"
                            className="block w-full border p-2"
                            value={this.state.user.address}
                            onChange={this.onTextChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        <span className="block text-sm mb-2">Contact number</span>
                        <input
                            type="tel"
                            name="phone"
                            className="block w-full border p-2"
                            value={this.state.user.phone}
                            onChange={this.onTextChange}
                        />
                    </label>
                </div>
            </div>
        )
    }

}

export default UserForm;