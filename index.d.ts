// Type definitions for chargebee 2.4
// Project: http://github.com/chargebee/chargebee-node
// Definitions by: Jason Salzman <https://github.com/jasonsalzman>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export const contact: {
};

export const download: {
};

export const third_party_payment_method: {
};

interface Conf {
  site: string,
  api_key: string,
}

export function configure(conf: Conf): void;

export namespace addon {
    function copy(...args: any[]): any;

    function create(...args: any[]): any;

    function list(...args: any[]): any;

    function retrieve(...args: any[]): any;

    function unarchive(...args: any[]): any;

    function update(...args: any[]): any;

    namespace copy {
        const prototype: {
        };

    }

    namespace create {
        const prototype: {
        };

    }

    namespace list {
        const prototype: {
        };

    }

    namespace retrieve {
        const prototype: {
        };

    }

    namespace unarchive {
        const prototype: {
        };

    }

    namespace update {
        const prototype: {
        };

    }

}

export namespace address {
    function retrieve(...args: any[]): any;

    function update(...args: any[]): any;

    namespace retrieve {
        const prototype: {
        };

    }

    namespace update {
        const prototype: {
        };

    }

}

export namespace card {
    function copy_card_for_customer(...args: any[]): any;

    function delete_card_for_customer(...args: any[]): any;

    function retrieve(...args: any[]): any;

    function switch_gateway_for_customer(...args: any[]): any;

    function update_card_for_customer(...args: any[]): any;

    namespace copy_card_for_customer {
        const prototype: {
        };

    }

    namespace delete_card_for_customer {
        const prototype: {
        };

    }

    namespace retrieve {
        const prototype: {
        };

    }

    namespace switch_gateway_for_customer {
        const prototype: {
        };

    }

    namespace update_card_for_customer {
        const prototype: {
        };

    }

}

export namespace comment {
    function create(...args: any[]): any;

    function list(...args: any[]): any;

    function retrieve(...args: any[]): any;

    namespace create {
        const prototype: {
        };

    }

    namespace list {
        const prototype: {
        };

    }

    namespace retrieve {
        const prototype: {
        };

    }

}

export namespace coupon {
    function copy(...args: any[]): any;

    function create(...args: any[]): any;

    function list(...args: any[]): any;

    function retrieve(...args: any[]): any;

    function unarchive(...args: any[]): any;

    function update(...args: any[]): any;

    namespace copy {
        const prototype: {
        };

    }

    namespace create {
        const prototype: {
        };

    }

    namespace list {
        const prototype: {
        };

    }

    namespace retrieve {
        const prototype: {
        };

    }

    namespace unarchive {
        const prototype: {
        };

    }

    namespace update {
        const prototype: {
        };

    }

}

export namespace coupon_code {
    function archive(...args: any[]): any;

    function create(...args: any[]): any;

    function list(...args: any[]): any;

    function retrieve(...args: any[]): any;

    namespace archive {
        const prototype: {
        };

    }

    namespace create {
        const prototype: {
        };

    }

    namespace list {
        const prototype: {
        };

    }

    namespace retrieve {
        const prototype: {
        };

    }

}

export namespace coupon_set {
    function add_coupon_codes(...args: any[]): any;

    function create(...args: any[]): any;

    function delete_unused_coupon_codes(...args: any[]): any;

    function list(...args: any[]): any;

    function retrieve(...args: any[]): any;

    function update(...args: any[]): any;

    namespace add_coupon_codes {
        const prototype: {
        };

    }

    namespace create {
        const prototype: {
        };

    }

    namespace delete_unused_coupon_codes {
        const prototype: {
        };

    }

    namespace list {
        const prototype: {
        };

    }

    namespace retrieve {
        const prototype: {
        };

    }

    namespace update {
        const prototype: {
        };

    }

}

export namespace credit_note {
    function create(...args: any[]): any;

    function credit_notes_for_customer(...args: any[]): any;

    function list(...args: any[]): any;

    function pdf(...args: any[]): any;

    function record_refund(...args: any[]): any;

    function retrieve(...args: any[]): any;

    function void_credit_note(...args: any[]): any;

    namespace create {
        const prototype: {
        };

    }

    namespace credit_notes_for_customer {
        const prototype: {
        };

    }

    namespace list {
        const prototype: {
        };

    }

    namespace pdf {
        const prototype: {
        };

    }

    namespace record_refund {
        const prototype: {
        };

    }

    namespace retrieve {
        const prototype: {
        };

    }

    namespace void_credit_note {
        const prototype: {
        };

    }

}

interface CustomerListInput {
  [name:string]: any,
  limit?: number,
  offset?: string,
  include_deleted?: boolean,
}

type OnOff = "on" | "off"
type Taxability = "taxable" | "exempt"
type Validation = "not_validated" | "valid" | "partially_valid" | "invalid"
type CardStatus = "no_status" | "expiring" | "valid" | "expired"

interface Customer {
  customer: {
    id: string,
    first_name: string,
    last_name: string,
    email: string,
    auto_collection: OnOff,
    net_term_days: number,
    allow_direct_debit: boolean,
    created_at: Date,
    taxability: Taxability,
    updated_at: Date,
    locale: string,
    resource_version: number,
    deleted: boolean,
    object: string,
    billing_address: {
        first_name: string,
        last_name: string,
        line1: string,
        city: string,
        state_code: string,
        state: string,
        country: string,
        zip: string,
        validation_status: Validation,
        object: string,
    },
    card_status: CardStatus,
    promotional_credits: number,
    refundable_credits: number,
    excess_payments: number,
    unbilled_charges: number,
    preferred_currency_code: string
  },
  card: {
    status: CardStatus,
    gateway: string,
    gateway_account_id: string,
    iin: number,
    last4: number,
    card_type: string,
    funding_type: string,
    expiry_month: number,
    expiry_year: number,
    object: string,
    masked_number: string,
    customer_id: string,
    payment_source_id: string,
  }
}

interface CustomerListOutput {
  list: Customer[],
  next_offset: string,
}

export namespace customer {
    function add_contact(...args: any[]): any;

    function add_promotional_credits(...args: any[]): any;

    function assign_payment_role(...args: any[]): any;

    function change_billing_date(...args: any[]): any;

    function clear_personal_data(...args: any[]): any;

    function collect_payment(...args: any[]): any;

    function contacts_for_customer(...args: any[]): any;

    function create(...args: any[]): any;

    function deduct_promotional_credits(...args: any[]): any;

    function delete_contact(...args: any[]): any;

    function list(params?: CustomerListInput): { request (): Promise<CustomerListOutput> };

    function merge(...args: any[]): any;

    function move(...args: any[]): any;

    function record_excess_payment(...args: any[]): any;

    function retrieve(...args: any[]): any;

    function set_promotional_credits(...args: any[]): any;

    function update(...args: any[]): any;

    function update_billing_info(...args: any[]): any;

    function update_contact(...args: any[]): any;

    function update_payment_method(...args: any[]): any;
}

export namespace estimate {
    function cancel_subscription(...args: any[]): any;

    function change_term_end(...args: any[]): any;

    function create_sub_for_customer_estimate(...args: any[]): any;

    function create_subscription(...args: any[]): any;

    function pause_subscription(...args: any[]): any;

    function renewal_estimate(...args: any[]): any;

    function resume_subscription(...args: any[]): any;

    function upcoming_invoices_estimate(...args: any[]): any;

    function update_subscription(...args: any[]): any;

    namespace cancel_subscription {
        const prototype: {
        };

    }

    namespace change_term_end {
        const prototype: {
        };

    }

    namespace create_sub_for_customer_estimate {
        const prototype: {
        };

    }

    namespace create_subscription {
        const prototype: {
        };

    }

    namespace pause_subscription {
        const prototype: {
        };

    }

    namespace renewal_estimate {
        const prototype: {
        };

    }

    namespace resume_subscription {
        const prototype: {
        };

    }

    namespace upcoming_invoices_estimate {
        const prototype: {
        };

    }

    namespace update_subscription {
        const prototype: {
        };

    }

}

export namespace event {
    function list(...args: any[]): any;

    function retrieve(...args: any[]): any;

    namespace list {
        const prototype: {
        };

    }

    namespace retrieve {
        const prototype: {
        };

    }

}

export namespace hosted_page {
    function acknowledge(...args: any[]): any;

    function checkout_existing(...args: any[]): any;

    function checkout_new(...args: any[]): any;

    function collect_now(...args: any[]): any;

    function extend_subscription(...args: any[]): any;

    function list(...args: any[]): any;

    function manage_payment_sources(...args: any[]): any;

    function retrieve(...args: any[]): any;

    function retrieve_agreement_pdf(...args: any[]): any;

    function update_card(...args: any[]): any;

    function update_payment_method(...args: any[]): any;

    namespace acknowledge {
        const prototype: {
        };

    }

    namespace checkout_existing {
        const prototype: {
        };

    }

    namespace checkout_new {
        const prototype: {
        };

    }

    namespace collect_now {
        const prototype: {
        };

    }

    namespace extend_subscription {
        const prototype: {
        };

    }

    namespace list {
        const prototype: {
        };

    }

    namespace manage_payment_sources {
        const prototype: {
        };

    }

    namespace retrieve {
        const prototype: {
        };

    }

    namespace retrieve_agreement_pdf {
        const prototype: {
        };

    }

    namespace update_card {
        const prototype: {
        };

    }

    namespace update_payment_method {
        const prototype: {
        };

    }

}

export namespace invoice {
    function add_addon_charge(...args: any[]): any;

    function add_charge(...args: any[]): any;

    function apply_credits(...args: any[]): any;

    function apply_payments(...args: any[]): any;

    function charge(...args: any[]): any;

    function charge_addon(...args: any[]): any;

    function close(...args: any[]): any;

    function collect_payment(...args: any[]): any;

    function create(...args: any[]): any;

    function import_invoice(...args: any[]): any;

    function invoices_for_customer(...args: any[]): any;

    function invoices_for_subscription(...args: any[]): any;

    function list(...args: any[]): any;

    function pdf(...args: any[]): any;

    function record_payment(...args: any[]): any;

    function record_refund(...args: any[]): any;

    function refund(...args: any[]): any;

    function remove_credit_note(...args: any[]): any;

    function remove_payment(...args: any[]): any;

    function retrieve(...args: any[]): any;

    function stop_dunning(...args: any[]): any;

    function update_details(...args: any[]): any;

    function void_invoice(...args: any[]): any;

    function write_off(...args: any[]): any;

    namespace add_addon_charge {
        const prototype: {
        };

    }

    namespace add_charge {
        const prototype: {
        };

    }

    namespace apply_credits {
        const prototype: {
        };

    }

    namespace apply_payments {
        const prototype: {
        };

    }

    namespace charge {
        const prototype: {
        };

    }

    namespace charge_addon {
        const prototype: {
        };

    }

    namespace close {
        const prototype: {
        };

    }

    namespace collect_payment {
        const prototype: {
        };

    }

    namespace create {
        const prototype: {
        };

    }

    namespace import_invoice {
        const prototype: {
        };

    }

    namespace invoices_for_customer {
        const prototype: {
        };

    }

    namespace invoices_for_subscription {
        const prototype: {
        };

    }

    namespace list {
        const prototype: {
        };

    }

    namespace pdf {
        const prototype: {
        };

    }

    namespace record_payment {
        const prototype: {
        };

    }

    namespace record_refund {
        const prototype: {
        };

    }

    namespace refund {
        const prototype: {
        };

    }

    namespace remove_credit_note {
        const prototype: {
        };

    }

    namespace remove_payment {
        const prototype: {
        };

    }

    namespace retrieve {
        const prototype: {
        };

    }

    namespace stop_dunning {
        const prototype: {
        };

    }

    namespace update_details {
        const prototype: {
        };

    }

    namespace void_invoice {
        const prototype: {
        };

    }

    namespace write_off {
        const prototype: {
        };

    }

}

export namespace order {
    function create(...args: any[]): any;

    function list(...args: any[]): any;

    function orders_for_invoice(...args: any[]): any;

    function retrieve(...args: any[]): any;

    function update(...args: any[]): any;

    namespace create {
        const prototype: {
        };

    }

    namespace list {
        const prototype: {
        };

    }

    namespace orders_for_invoice {
        const prototype: {
        };

    }

    namespace retrieve {
        const prototype: {
        };

    }

    namespace update {
        const prototype: {
        };

    }

}

export namespace payment_source {
    function create_bank_account(...args: any[]): any;

    function create_card(...args: any[]): any;

    function create_using_permanent_token(...args: any[]): any;

    function create_using_temp_token(...args: any[]): any;

    function export_payment_source(...args: any[]): any;

    function list(...args: any[]): any;

    function retrieve(...args: any[]): any;

    function switch_gateway_account(...args: any[]): any;

    function update_card(...args: any[]): any;

    function verify_bank_account(...args: any[]): any;

    namespace create_bank_account {
        const prototype: {
        };

    }

    namespace create_card {
        const prototype: {
        };

    }

    namespace create_using_permanent_token {
        const prototype: {
        };

    }

    namespace create_using_temp_token {
        const prototype: {
        };

    }

    namespace export_payment_source {
        const prototype: {
        };

    }

    namespace list {
        const prototype: {
        };

    }

    namespace retrieve {
        const prototype: {
        };

    }

    namespace switch_gateway_account {
        const prototype: {
        };

    }

    namespace update_card {
        const prototype: {
        };

    }

    namespace verify_bank_account {
        const prototype: {
        };

    }

}

export namespace plan {
    function copy(...args: any[]): any;

    function create(...args: any[]): any;

    function list(...args: any[]): any;

    function retrieve(...args: any[]): any;

    function unarchive(...args: any[]): any;

    function update(...args: any[]): any;

    namespace copy {
        const prototype: {
        };

    }

    namespace create {
        const prototype: {
        };

    }

    namespace list {
        const prototype: {
        };

    }

    namespace retrieve {
        const prototype: {
        };

    }

    namespace unarchive {
        const prototype: {
        };

    }

    namespace update {
        const prototype: {
        };

    }

}

export namespace portal_session {
    function activate(...args: any[]): any;

    function create(...args: any[]): any;

    function logout(...args: any[]): any;

    function retrieve(...args: any[]): any;

    namespace activate {
        const prototype: {
        };

    }

    namespace create {
        const prototype: {
        };

    }

    namespace logout {
        const prototype: {
        };

    }

    namespace retrieve {
        const prototype: {
        };

    }

}

export namespace promotional_credit {
    function add(...args: any[]): any;

    function deduct(...args: any[]): any;

    function list(...args: any[]): any;

    function retrieve(...args: any[]): any;

    function set(...args: any[]): any;

    namespace add {
        const prototype: {
        };

    }

    namespace deduct {
        const prototype: {
        };

    }

    namespace list {
        const prototype: {
        };

    }

    namespace retrieve {
        const prototype: {
        };

    }

    namespace set {
        const prototype: {
        };

    }

}

export namespace resource_migration {
    function retrieve_latest(...args: any[]): any;

    namespace retrieve_latest {
        const prototype: {
        };

    }

}

export namespace site_migration_detail {
    function list(...args: any[]): any;

    namespace list {
        const prototype: {
        };

    }

}

export namespace subscription {
    function add_charge_at_term_end(...args: any[]): any;

    function cancel(...args: any[]): any;

    function change_term_end(...args: any[]): any;

    function charge_addon_at_term_end(...args: any[]): any;

    function charge_future_renewals(...args: any[]): any;

    function create(...args: any[]): any;

    function create_for_customer(...args: any[]): any;

    function import_for_customer(...args: any[]): any;

    function import_subscription(...args: any[]): any;

    function list(...args: any[]): any;

    function override_billing_profile(...args: any[]): any;

    function pause(...args: any[]): any;

    function reactivate(...args: any[]): any;

    function remove_coupons(...args: any[]): any;

    function remove_scheduled_cancellation(...args: any[]): any;

    function remove_scheduled_changes(...args: any[]): any;

    function remove_scheduled_pause(...args: any[]): any;

    function remove_scheduled_resumption(...args: any[]): any;

    function resume(...args: any[]): any;

    function retrieve(...args: any[]): any;

    function retrieve_with_scheduled_changes(...args: any[]): any;

    function subscriptions_for_customer(...args: any[]): any;

    function update(...args: any[]): any;

    namespace add_charge_at_term_end {
        const prototype: {
        };

    }

    namespace cancel {
        const prototype: {
        };

    }

    namespace change_term_end {
        const prototype: {
        };

    }

    namespace charge_addon_at_term_end {
        const prototype: {
        };

    }

    namespace charge_future_renewals {
        const prototype: {
        };

    }

    namespace create {
        const prototype: {
        };

    }

    namespace create_for_customer {
        const prototype: {
        };

    }

    namespace import_for_customer {
        const prototype: {
        };

    }

    namespace import_subscription {
        const prototype: {
        };

    }

    namespace list {
        const prototype: {
        };

    }

    namespace override_billing_profile {
        const prototype: {
        };

    }

    namespace pause {
        const prototype: {
        };

    }

    namespace reactivate {
        const prototype: {
        };

    }

    namespace remove_coupons {
        const prototype: {
        };

    }

    namespace remove_scheduled_cancellation {
        const prototype: {
        };

    }

    namespace remove_scheduled_changes {
        const prototype: {
        };

    }

    namespace remove_scheduled_pause {
        const prototype: {
        };

    }

    namespace remove_scheduled_resumption {
        const prototype: {
        };

    }

    namespace resume {
        const prototype: {
        };

    }

    namespace retrieve {
        const prototype: {
        };

    }

    namespace retrieve_with_scheduled_changes {
        const prototype: {
        };

    }

    namespace subscriptions_for_customer {
        const prototype: {
        };

    }

    namespace update {
        const prototype: {
        };

    }

}

export namespace time_machine {
    function retrieve(...args: any[]): any;

    function start_afresh(...args: any[]): any;

    function travel_forward(...args: any[]): any;

    function wait_for_time_travel_completion(): any;

    namespace retrieve {
        const prototype: {
        };

    }

    namespace start_afresh {
        const prototype: {
        };

    }

    namespace travel_forward {
        const prototype: {
        };

    }

    namespace wait_for_time_travel_completion {
        const prototype: {
        };

    }

}

export namespace transaction {
    function list(...args: any[]): any;

    function payments_for_invoice(...args: any[]): any;

    function retrieve(...args: any[]): any;

    function transactions_for_customer(...args: any[]): any;

    function transactions_for_subscription(...args: any[]): any;

    namespace list {
        const prototype: {
        };

    }

    namespace payments_for_invoice {
        const prototype: {
        };

    }

    namespace retrieve {
        const prototype: {
        };

    }

    namespace transactions_for_customer {
        const prototype: {
        };

    }

    namespace transactions_for_subscription {
        const prototype: {
        };

    }

}

export namespace unbilled_charge {
    function invoice_now_estimate(...args: any[]): any;

    function invoice_unbilled_charges(...args: any[]): any;

    function list(...args: any[]): any;

    namespace invoice_now_estimate {
        const prototype: {
        };

    }

    namespace invoice_unbilled_charges {
        const prototype: {
        };

    }

    namespace list {
        const prototype: {
        };

    }

}

export namespace virtual_bank_account {
    function create(...args: any[]): any;

    function create_using_permanent_token(...args: any[]): any;

    function list(...args: any[]): any;

    function retrieve(...args: any[]): any;

    namespace create {
        const prototype: {
        };

    }

    namespace create_using_permanent_token {
        const prototype: {
        };

    }

    namespace list {
        const prototype: {
        };

    }

    namespace retrieve {
        const prototype: {
        };

    }

}
