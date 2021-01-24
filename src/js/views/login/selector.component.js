import { type } from 'jquery';
import React, { Component } from 'react';

export class SelectorComponent extends Component {
    state = {
      types: [],
      selectedType: "",
      validationError: ""
    };

    updateList() {
      fetch(
        this.props.url
      )
        .then(response => {
          return response.json();
        })
        .then(data => {
          let typesFromApi = data.map(type => {
            return { value: type.id, display: type.type || type.displayName};
          });
          this.setState({
            types: [
              {
                value: "",
                display:
                  "Вкажiть Спецiальнiсть"
              }
            ].concat(typesFromApi)
          });
        })
        .catch(error => {
          console.log(error);
        });
    }

    componentDidUpdate() {
      this.updateList()
    }
  
    componentDidMount() {
      this.updateList()
    }

    onSelectorChange(e) {
      this.setState({
        selectedType: e.target.value,
        validationError:
          e.target.value === ""
            ? "Вкажiть Спецiальнiсть!"
            : ""
      }, () =>  {
       this.props.groups && this.props.groups(this.state.selectedType)
       this.props.onChange && this.props.onChange(this.state.selectedType)
      })
    }
  
    render() {
      return (
        <div>
          <select className="form-control"
            value={this.state.selectedType}
            onChange={e =>
              this.onSelectorChange(e)
            }
          >
            {this.state.types.map(type => (
              <option
                key={type.value}
                value={type.value}
              >
                {type.display}
              </option>
            ))}
          </select>
          <div
            style={{
              color: "red",
              marginTop: "5px"
            }}
          >
            {this.state.validationError}
          </div>
        </div>
      );
    }
  }

  export default SelectorComponent;