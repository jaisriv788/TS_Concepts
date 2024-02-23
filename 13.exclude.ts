/**
 * The function `eventCall` accepts event types 'hover' and 'click', but not 'scroll'.
 * @param {RemoveType} eventCalled - The `eventCalled` parameter in the `eventCall` function is of type
 * `RemoveType`, which is defined as the `EventType` type excluding the value `'scroll'`. This means
 * that the function `eventCall` can accept values of type `'hover'` or `'click'`, but
 */
type EventType = 'scroll' | 'hover' | 'click'

type RemoveType = Exclude<EventType,'scroll'>

function eventCall (eventCalled : RemoveType){
    console.log(eventCalled);
}

eventCall('hover')
eventCall('click')
//but the code will not work upon scroll it will throw error.