import { useMutation } from "@tanstack/react-query";
import type { Registration } from "../backend";
import { useActor } from "./useActor";

export function useRegisterStudent() {
  const { actor } = useActor();
  return useMutation({
    mutationFn: async (registration: Registration) => {
      if (!actor) throw new Error("Not connected");
      return actor.register(registration);
    },
  });
}
