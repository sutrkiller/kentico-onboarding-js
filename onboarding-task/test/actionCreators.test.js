describe('createListItem', () => {
  it('creates ADD_ITEM_TO_LIST action', () => {
    const action = createListItem('Testing...');
    expect(action.type).toBe('ADD_ITEM_TO_LIST');
    expect(action.text).toBe('Testing...');
  });
});

describe('switchFormVisibilityForListItem', () => {
  it('creates SWITCH_FORM_VISIBILITY_FOR_ITEM action', () => {
    const action = switchFormVisibilityForListItem('test-id');
    expect(action.type).toBe('SWITCH_FORM_VISIBILITY_FOR_ITEM');
    expect(action.id).toBe('test-id');
  });
});

describe('updateListItem', () => {
  it('creates UPDATE_ITEM action', () => {
    const action = updateListItem('test-id', 'Testing...');
    expect(action.type).toBe('UPDATE_ITEM');
    expect(action.id).toBe('test-id');
    expect(action.text).toBe('Testing...');
  });
});

describe('deleteListItem', () => {
  it('creates DELETE_ITEM_FROM_LIST action', () => {
    const action = deleteListItem('test-id');
    expect(action.type).toBe('DELETE_ITEM_FROM_LIST');
    expect(action.id).toBe('DELETE_ITEM_FROM_LIST');
  });
});
