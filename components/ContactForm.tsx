"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "名前は2文字以上で入力してください。",
  }),
  email: z.string().email({
    message: "有効なメールアドレスを入力してください。",
  }),
  phone: z.string().min(10, {
    message: "有効な電話番号を入力してください。",
  }),
  company: z.string().min(2, {
    message: "会社名は2文字以上で入力してください。",
  }),
  message: z.string().min(10, {
    message: "お問い合わせ内容は10文字以上で入力してください。",
  }),
  privacy: z.boolean().refine((val) => val === true, {
    message: "プライバシーポリシーに同意する必要があります。",
  }),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
      privacy: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // ここに実際の送信処理を実装
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>お名前</FormLabel>
                <FormControl>
                  <Input placeholder="山田 太郎" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>メールアドレス</FormLabel>
                <FormControl>
                  <Input placeholder="example@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>電話番号</FormLabel>
                <FormControl>
                  <Input placeholder="090-1234-5678" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>会社名</FormLabel>
                <FormControl>
                  <Input placeholder="株式会社サンプル" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>お問い合わせ内容</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="お問い合わせ内容を入力してください"
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="privacy"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  プライバシーポリシーに同意する
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
          お問い合わせを送信する
        </Button>
      </form>
    </Form>
  );
}