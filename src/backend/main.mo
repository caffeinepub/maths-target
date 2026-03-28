import Order "mo:core/Order";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Text "mo:core/Text";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";

actor {
  type Board = {
    #CBSE;
    #ICSE;
  };

  type Registration = {
    name : Text;
    className : Text;
    board : Board;
    phone : Text;
    email : Text;
    parentName : Text;
    message : ?Text;
  };

  module Registration {
    public func compareByEmail(reg1 : Registration, reg2 : Registration) : Order.Order {
      Text.compare(reg1.email, reg2.email);
    };
  };

  let registrations = Map.empty<Text, Registration>();

  // Add new registration
  public shared ({ caller }) func register(registration : Registration) : async () {
    if (registrations.containsKey(registration.email)) {
      Runtime.trap("Registration with this email already exists.");
    };
    registrations.add(registration.email, registration);
  };

  // Get all registrations (sorted by email)
  public query ({ caller }) func getAllRegistrations() : async [Registration] {
    registrations.values().toArray().sort(Registration.compareByEmail);
  };

  // Get total count of registrations
  public query ({ caller }) func getRegistrationCount() : async Nat {
    registrations.size();
  };
};
