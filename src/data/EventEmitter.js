class EventEmitter {
  events = []

  addEventListener(eventName, callback) {
    this.events.push({ id: eventName, action: callback })

    return () => this.removeEventListener(eventName)
  }

  emit(eventName, data) {
    const event = this.events.find(event => event.id === eventName)

    if (!event) return null

    event.action(data)
  }

  removeEventListener(eventName) {
    const eventIndex = this.events.findIndex(event => event.id === eventName)

    if (eventIndex < 0) return null

    this.events.splice(eventIndex, 1)
  }
}

export const eventEmitter = new EventEmitter()
