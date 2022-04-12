

//接聽
function onInvite(invitation) {
  // Defined In Next Steps
}

const userAgentOptions = {
  authorizationPassword: 'secretPassword',
  authorizationUsername: 'authorizationUsername',
  delegate: {
    onInvite
  }
  transportOptions,
  uri
};
const userAgent = new UserAgent(userAgentOptions);
