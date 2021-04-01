import { types, Instance, SnapshotIn, SnapshotOut } from 'mobx-state-tree'

export const Root = types.model({
  test: types.string,
})

export type IRoot = Instance<typeof Root>
export type IRootSnapshotIn = SnapshotIn<typeof Root>
export type IRootSnapshotOut = SnapshotOut<typeof Root>
