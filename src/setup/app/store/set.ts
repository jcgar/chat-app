interface IPayloadObject {
  payload: any;
}

export const setConversation = (state: any, { payload }: IPayloadObject) => {
  return {
    ...state,
    conversation: payload,
  };
};
