import { Emitter } from 'mitt';
import { InjectionKey } from 'vue';
import { TEvents } from './globals';

export const emitterKey: InjectionKey<Emitter<TEvents>> = Symbol(`$emitter`);
