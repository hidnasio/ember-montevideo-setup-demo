import { create, text, visitable, count, attribute } from 'tajpado/tests/page-object';

function typeLetter(selector) {
  return {
    isDescriptor: true,

    value(c) {
      keyEvent(selector, 'keypress', c.charCodeAt(0));
    }
  };
}

export default create({
  visit: visitable('/'),
  visitActivity: visitable('/activities/:activity_id'),

  typeLetter: typeLetter('.activity-script-viewer'),
  completed: text('.activity-script-viewer .completed'),
  pending: text('.activity-script-viewer .pending'),
  activityCompletedMessage: text('.activity-completed'),
  errorCount: text('.error-count'),
  errorMarkCount: count('.error-mark'),
  errorMarkTitle: attribute('title', '.error-mark')
});