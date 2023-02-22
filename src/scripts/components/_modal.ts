declare var $: any;

const resetCommonModal = () => {
  $('#commonModal')
    .find('#name')
    .val('');
  $('#commonModal')
    .find('#extension')
    .prop('disabled', true)
    .val('');
  $('#commonModal')
    .find('#type')
    .val('folder');
};

const setValueForCommonModal = (
  functionName: 'Edit' | 'Add',
  type: string,
  name: string,
  extension?: string,
  id?: string,
) => {
  $('#commonModal').modal('show');

  $('#commonModal')
    .find('#commonModalLabel')
    .text(`${functionName} ${type}`);
  $('#commonModal')
    .find('#type')
    .val(type)
    .prop('disabled', functionName === 'Edit');
  $('#commonModal')
    .find('#name')
    .val(name);
  $('#commonModal')
    .find('#extension')
    .prop('disabled', type === 'folder')
    .val(extension || '');
  $('#commonModal')
    .find('#id')
    .val(id || '');
};

const setLoadingForSubmitButton = (isLoading: boolean) => {
  $('#commonModal')
    .find('#btnSubmit')
    .prop('disabled', isLoading)
    .text(isLoading ? 'Loading...' : 'Submit');
};

const modalHelper = {
  resetCommonModal,
  setValueForCommonModal,
  setLoadingForSubmitButton,
};

export default modalHelper;
