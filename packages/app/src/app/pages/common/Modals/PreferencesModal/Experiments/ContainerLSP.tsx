import { Text } from '@codesandbox/components';
import React, { FunctionComponent } from 'react';

import { useOvermind } from 'app/overmind';

import { PaddedPreference } from '../elements';

export const ContainerLSP: FunctionComponent = () => {
  const {
    actions: {
      preferences: { toggleContainerLspExperiment },
    },
    state: { user },
  } = useOvermind();

  return user ? (
    <>
      <PaddedPreference
        setValue={toggleContainerLspExperiment}
        title="Use container language server"
        tooltip="Language server"
        type="boolean"
        value={user.experiments.containerLsp}
      />

      <Text
        block
        marginTop={2}
        size={3}
        style={{ maxWidth: '60%' }}
        variant="muted"
      >
        As part of making containers more powerful we now allow the language
        server to run there. Please help us test it :-)
      </Text>
    </>
  ) : null;
};
