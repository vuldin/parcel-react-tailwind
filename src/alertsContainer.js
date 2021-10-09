import { Container } from 'unstated'

export default class StateContainer extends Container {
  state = {
    alerts: [
      { color: 'green', title: 'Ok!', message: 'Everything is good.' },
      { color: 'red', title: 'Oh noes!', message: 'Put out the fire!' },
      { color: 'orange', title: 'Warning...', message: 'Network is slow.' },
      {
        color: 'blue',
        title: 'Already added',
        message: 'No action required.',
      },
    ],
  }
  removeIndex = (int) => {
    this.setState({
      alerts: this.state.alerts.filter((alert, i) => i !== int),
    })
  }
}
