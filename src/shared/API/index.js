/**
* Create a function that accepts the payloads below
* and returns an array of nested React components (componentPayload),
* and an array of redux state properties to create and hydrate (statePayload).
*
* The returned values must be given to a React + Redux application and rendered.
*
* We'd also like to challenge you to keep this above function itself framework
* agnostic while somehow also specifying that components be rendered using react
* and state be setup using redux.
*
* Each componentPayload object represents one of the following: *
* - A component that must be rendered and its list of children that also must be rendered.
* - A property with a type and a value. Which may correspond to a slice of state, or a function.
*
* Given the payload below you are also responsible for creating the following:*
* 1. A 'People' component that renders children.
* 2. A 'Person' component that renders a persons first name, last name, avatar and onClick
increments
* that persons score.
* 3. A method that increments a persons score in the redux state. *
* Bonus points for server side rendering if you find you have the time. *
* This project should take you no longer than 4 hours to complete.
*
* @format */
import { compose, map, over, lensProp } from 'ramda';

const componentPayload = [
  {
    id: '298a1eb8-4e49-4d9c-b4bf-33aef86bd286',
    component: 'People', // See instructions (1)
    children: [
      {
        id: '94929e56-d5c5-45d4-b7c9-3fdaf9720342',
        component: 'Person',
        properties: {
          firstName: {
            type: 'string',
            value: 'Jeremie'
          },
          lastName: {
            type: 'string',
            value: 'Dasilva'
          },
          avatar: {
            type: 'string',
            value:
              'https://gravatacom/avatar/054052979324fe61bdfce4f7741a2c64?s=400&d=robohash&r=x'
          },
          age: {
            type: 'stateReference',
            value: 'b61f6d90-c8a8-40b6-84d6-c14a699bb46f'
          },
          onClick: {
            type: 'function',
            value: 'incrementScore',
            arguments: [
              {
                type: 'stateReference',
                value: 'b61f6d90-c8a8-40b6-84d6-c14a699bb46f'
              }
            ]
          }
        }
      },
      {
        id: 'ea605595-d606-4751-b90c-40e8d2de9f0c',
        component: 'Person', // See instructions (2)
        properties: {
          firstName: { type: 'string', value: 'Andre' },
          lastName: {
            type: 'string',
            value: 'Perry'
          },
          avatar: {
            type: 'string',
            value:
              'https://gravatacom/avatar/c805e04d43db32921aca0eb6a4df0fbd?s=400&d=robohash&r=x'
          },
          age: {
            type: 'stateReference',
            value: 'c191b3b4-3dcd-4315-a28d-f5174329d9db'
          },
          onClick: {
            type: 'function',
            value: 'incrementScore', // See instructions (3)
            arguments: [
              {
                type: 'stateReference',
                value: 'c191b3b4-3dcd-4315-a28d-f5174329d9db'
              }
            ]
          }
        }
      },
      {
        id: '629332af-4b50-417e-a7a4-be1864ecb94a',
        component: 'Person',
        properties: {
          firstName: { type: 'string', value: 'Ivan' },
          lastName: { type: 'string', value: 'Moreno' },
          avatar: {
            type: 'string',
            value:
              'https://gravatacom/avatar/543c9c9041d36fab4dec68d545b2ffe2?s=400&d=robohash&r=x'
          },
          age: {
            type: 'stateReference',
            value: '882dc4fc-0431-497d-8355-0b4f349a08db'
          },
          onClick: {
            type: 'function',
            value: 'incrementScore',
            arguments: [
              {
                type: 'stateReference',
                value: '882dc4fc-0431-497d-8355-0b4f349a08db'
              }
            ]
          }
        }
      }
    ]
  }
];

const statePayload = {
  'c191b3b4-3dcd-4315-a28d-f5174329d9db': {
    name: 'andreScore',
    initialValue: 18
  },
  'b61f6d90-c8a8-40b6-84d6-c14a699bb46f': {
    name: 'jeremieScore',
    initialValue: 39
  },
  '882dc4fc-0431-497d-8355-0b4f349a08db': {
    name: 'ivanScore',
    initialValue: 26
  }
};

const unbox = (arr = []) => {
  const [data] = arr;
  return data;
};

const childrenLens = lensProp('children');
const propertiesLens = lensProp('properties');

const isAvatar = x =>
  x.avatar
    ? {
        ...x,
        avatar: { ...x.avatar, type: 'img' },
        onClick: { ...x.onClick, input: x.onClick.arguments }
      }
    : x;

const isInObject = obj => input => ({
  ...input,
  score: {
    name: obj[input.age.value].name,
    value: obj[input.age.value].initialValue
  }
});

const checkState = isInObject(statePayload);

const keyedObjectsToArray = obj =>
  Object.entries(obj).map(([key, value]) => ({ id: key, ...value }));

const stateObjectToArray = keyedObjectsToArray(statePayload);

const mergedState = compose(
  over(childrenLens, map(over(propertiesLens, x => isAvatar(x)))),
  over(childrenLens, map(over(propertiesLens, x => checkState(x))))
)(unbox(componentPayload));

export {
  childrenLens,
  propertiesLens,
  stateObjectToArray,
  statePayload,
  componentPayload,
  unbox,
  keyedObjectsToArray
};

export default mergedState;
