import JustValidate from 'just-validate';

export const initvalidators = () => {

  const signupForm = document.querySelector( '#signup-form' );

  if ( !signupForm ) return;

  const validator = new JustValidate( '#signup-form', {
    errorLabelStyle: null,
    errorLabelCssClass: [ 'form-field__error' ],
    errorFieldCssClass: [ 'invalid' ],
    successFieldCssClass: [ 'valid' ]
  } );

  validator
    .addField( '#first-name', [
      { rule: 'required' },
      { rule: 'minLength', value: 2 },
      { rule: 'maxLength', value: 15 }
    ] )
    .addField( '#last-name', [
      { rule: 'required' },
      { rule: 'minLength', value: 2 },
      { rule: 'maxLength', value: 15 }
    ] )
    .addField( '#email', [
      { rule: 'required' },
      { rule: 'email' }
    ] )
    .addField( '#password', [
      { rule: 'required' },
      {
        rule: 'strongPassword',
        errorMessage: 'Min 8 chars: upper/lowercase, number, symbol (!,@,$,%,&,*)'
      }
    ] )
    .addField( '#confirm-password', [
      { rule: 'required' },
      {
        rule: 'strongPassword',
        errorMessage: 'Min 8 chars: upper/lowercase, number, symbol (!,@,$,%,&,*)'
      },
      {
        validator: ( value, fields ) => {
          if ( !fields[ '#password' ] && !fields[ '#password'] .elem ) return false;
          return value === fields[ '#password' ].elem.value;
        },
        errorMessage: 'Passwords should be the same'
      }
    ] );
};

