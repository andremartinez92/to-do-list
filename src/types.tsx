export type ListType = 'completed' | 'today' | 'open'

export interface Task { name: string; list: ListType; }