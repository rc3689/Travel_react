import React from "react";
import { DollarSign, MailPlus, Plus } from "lucide-react";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { email, z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import api from "@/api/axios";
import { toast } from "sonner";
import { useNavigate, useSearchParams } from "react-router-dom";

const inviteSchema = z.object({
  email: z.array(z.string().min(5, "Email must be atleast 5 characters")),
});

const InviteCollaborator = ({ tripId }) => {
  const form = useForm({
    resolver: zodResolver(inviteSchema),
    defaultValues: {
      email: [""],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "email",
  });

  const addEmail = () => {
    append("");
  };

  const onSubmit = async (data) => {
    try {
      const response = await api.post(`/trips/${tripId}/invite`, data);
      toast.info("Invitation link sent");
      form.reset();
    } catch (error) {
      console.error("Error adding expense:", error);
      toast.error("An error occurred while adding expense");
      form.reset();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center">
              <MailPlus className="mr-2 h-5 w-5 text-green-600" />
              Invite Collaborator
            </CardTitle>
            <CardDescription>
              Add family or friends to this trip
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {fields.map((field, index) => {
              return (
                <FormField
                  key={field.id}
                  control={form.control}
                  name={`email.${index}`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="abc@gmail.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              );
            })}

            <div className="grid gap-2 grid-cols-2">
              <Button type="button" onClick={addEmail} variant="outline">
                Add Email
              </Button>
              <Button type="submit">
                <MailPlus />
                Invite
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
};

export default InviteCollaborator;
