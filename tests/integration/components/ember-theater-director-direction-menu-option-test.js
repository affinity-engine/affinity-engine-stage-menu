import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { hook, initialize as initializeHook } from 'ember-hook';
import { initialize as initializeMultitons } from 'ember-multiton-service';

const {
  getOwner,
  setProperties
} = Ember;

moduleForComponent('ember-theater-director-direction-menu-option', 'Integration | Component | ember theater director direction menu option', {
  integration: true,

  beforeEach() {
    const appInstance = getOwner(this);

    initializeHook();
    initializeMultitons(appInstance);
  }
});

test('it renders a button when both `choice.inputable` and `inputOpen` are false', function(assert) {
  assert.expect(2);

  const choice = Ember.Object.create({
    inputable: false
  });

  setProperties(this, {
    choice,
    inputOpen: false
  });

  this.render(hbs`{{ember-theater-director-direction-menu-option choice=choice inputOpen=inputOpen}}`);

  assert.ok(this.$(hook('menu_direction_option_button')).length === 1, 'it renders a button');
  assert.ok(this.$(hook('menu_direction_option_input')).length === 0, 'it does not render an input');
});

test('it renders a button when is `choice.inputable` true but `inputOpen` are false', function(assert) {
  assert.expect(2);

  const choice = Ember.Object.create({
    inputable: true
  });

  setProperties(this, {
    choice,
    inputOpen: false
  });

  this.render(hbs`{{ember-theater-director-direction-menu-option choice=choice inputOpen=inputOpen}}`);

  assert.ok(this.$(hook('menu_direction_option_button')).length === 1, 'it renders a button');
  assert.ok(this.$(hook('menu_direction_option_input')).length === 0, 'it does not render an input');
});

test('it renders a button when both `choice.inputable` is false but `inputOpen` is true', function(assert) {
  assert.expect(2);

  const choice = Ember.Object.create({
    inputable: false
  });

  setProperties(this, {
    choice,
    inputOpen: true
  });

  this.render(hbs`{{ember-theater-director-direction-menu-option choice=choice inputOpen=inputOpen}}`);

  assert.ok(this.$(hook('menu_direction_option_button')).length === 1, 'it renders a button');
  assert.ok(this.$(hook('menu_direction_option_input')).length === 0, 'it does not render an input');
});

test('it renders an input when both `choice.inputable` and `inputOpen` are true', function(assert) {
  assert.expect(2);

  const choice = Ember.Object.create({
    inputable: true
  });

  setProperties(this, {
    choice,
    inputOpen: true
  });

  this.render(hbs`{{ember-theater-director-direction-menu-option choice=choice inputOpen=inputOpen}}`);

  assert.ok(this.$(hook('menu_direction_option_button')).length === 0, 'it does not render a button');
  assert.ok(this.$(hook('menu_direction_option_input')).length === 1, 'it renders an input');
});
